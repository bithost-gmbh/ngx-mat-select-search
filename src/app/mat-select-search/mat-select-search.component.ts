/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef, EventEmitter, forwardRef, Inject, Input, OnDestroy, OnInit, QueryList,
  ViewChild,
  ContentChild, Optional, HostBinding
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption, MatSelect, SELECT_PANEL_MAX_HEIGHT, _countGroupLabelsBeforeOption } from '@angular/material';
import {
  A,
  Z,
  ZERO,
  NINE,
  SPACE, END, HOME,
} from '@angular/cdk/keycodes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';

import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';

/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
@Component({
  selector: 'ngx-mat-select-search',
  templateUrl: './mat-select-search.component.html',
  styleUrls: ['./mat-select-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSelectSearchComponent),
      multi: true
    }
  ],
  animations: [
    trigger('enterAnimation', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void <=> *', [
        animate('0.1s ease-out')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatSelectSearchComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {

  /** Label of the search placeholder */
  @Input() placeholderLabel = 'Suche';

  /** Type of the search input field */
  @Input() type = "text";

  /** Label to be shown when no entries are found. Set to null if no message should be shown. */
  @Input() noEntriesFoundLabel = 'Keine Optionen gefunden';

  /**
    * Whether or not the search field should be cleared after the dropdown menu is closed.
    * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
    */
  @Input() clearSearchInput = true;

  /** Whether to show the search-in-progress indicator */
  @Input() searching = false;

  /** Disables initial focusing of the input field */
  @Input() disableInitialFocus = false;

  /**
   * Prevents home / end key being propagated to mat-select,
   * allowing to move the cursor within the search input instead of navigating the options
   */
  @Input() preventHomeEndKeyPropagation = false;

  /** Disables scrolling to active options when option list changes. Useful for server-side search */
  @Input() disableScrollToActiveOnOptionsChanged = false;

  /** Adds 508 screen reader support for search box */
  @Input() ariaLabel = 'dropdown search';

  /** Reference to the search input field */
  @ViewChild('searchSelectInput', {read: ElementRef}) searchSelectInput: ElementRef;

  /** Reference to the search input field */
  @ViewChild('innerSelectSearch', {read: ElementRef}) innerSelectSearch: ElementRef;

  /** Reference to custom search input clear icon */
  @ContentChild(MatSelectSearchClearDirective) clearIcon: MatSelectSearchClearDirective;

  @HostBinding('class.mat-select-search-inside-mat-option')
  get isInsideMatOption(): boolean {
    return !!this.matOption;
  }

  /** Current search value */
  get value(): string {
    return this._value;
  }
  private _value: string;

  onChange: Function = (_: any) => {};
  onTouched: Function = (_: any) => {};

  /** Reference to the MatSelect options */
  public _options: QueryList<MatOption>;

  /** Previously selected values when using <mat-select [multiple]="true">*/
  private previousSelectedValues: any[];

  /** Whether the backdrop class has been set */
  private overlayClassSet = false;

  /** Event that emits when the current value changes */
  private change = new EventEmitter<string>();

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();


  constructor(@Inject(MatSelect) public matSelect: MatSelect,
              public changeDetectorRef: ChangeDetectorRef,
              private _viewportRuler: ViewportRuler,
              @Optional() @Inject(MatOption) public matOption: MatOption = null) {


  }

  ngOnInit() {
    // set custom panel class
    const panelClass = 'mat-select-search-panel';
    if (this.matSelect.panelClass) {
      if (Array.isArray(this.matSelect.panelClass)) {
        this.matSelect.panelClass.push(panelClass);
      } else if (typeof this.matSelect.panelClass === 'string') {
        this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
      } else if (typeof this.matSelect.panelClass === 'object') {
        this.matSelect.panelClass[panelClass] = true;
      }
    } else {
      this.matSelect.panelClass = panelClass;
    }

    // set custom mat-option class if the component was placed inside a mat-option
    if (this.matOption) {
      this.matOption.disabled = true;
      this.matOption._getHostElement().classList.add('contains-mat-select-search');
    }

    // when the select dropdown panel is opened or closed
    this.matSelect.openedChange
      .pipe(
        delay(1),
        takeUntil(this._onDestroy)
      )
      .subscribe((opened) => {
        if (opened) {
          this.updateInputWidth();
          // focus the search field when opening
          if (!this.disableInitialFocus) {
            this._focus();
          }
        } else {
          // clear it when closing
          if (this.clearSearchInput) {
            this._reset();
          }
        }
      });

    // set the first item active after the options changed
    this.matSelect.openedChange
      .pipe(take(1))
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        if (this.matSelect._keyManager) {
          this.matSelect._keyManager.change.pipe(takeUntil(this._onDestroy))
            .subscribe(() => this.adjustScrollTopToFitActiveOptionIntoView())
        } else {
          console.log('_keyManager was not initialized.');
        }

        this._options = this.matSelect.options;
        this._options.changes
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            const keyManager = this.matSelect._keyManager;
            if (keyManager && this.matSelect.panelOpen) {

              // avoid "expression has been changed" error
              setTimeout(() => {
                // set first item active and input width
                keyManager.setFirstItemActive();
                this.updateInputWidth();

                // set no entries found class on mat option
                if (this.matOption) {
                  if (this._noEntriesFound()) {
                    this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                  } else {
                    this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                  }
                }

                if (!this.disableScrollToActiveOnOptionsChanged) {
                  this.adjustScrollTopToFitActiveOptionIntoView();
                }

              }, 1);

            }
          });
      });

    // detect changes when the input changes
    this.change
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });

    // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
    this._viewportRuler.change()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        if (this.matSelect.panelOpen) {
          this.updateInputWidth();
        }
      });

    this.initMultipleHandling();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setOverlayClass();
    });

    // update view when available options change
    this.matSelect.openedChange
      .pipe(
        take(1),
        takeUntil(this._onDestroy)
      ).subscribe(() => {
        this.matSelect.options.changes
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.changeDetectorRef.markForCheck();
          });
      });
  }

  /**
   * Handles the key down event with MatSelect.
   * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
   * @param event
   */
  _handleKeydown(event: KeyboardEvent) {
    // Prevent propagation for all alphanumeric characters in order to avoid selection issues
    if ((event.key && event.key.length === 1) ||
      (event.keyCode >= A && event.keyCode <= Z) ||
      (event.keyCode >= ZERO && event.keyCode <= NINE) ||
      (event.keyCode === SPACE)
      || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))
    ) {
      event.stopPropagation();
    }
  }


  writeValue(value: string) {
    const valueChanged = value !== this._value;
    if (valueChanged) {
      this._value = value;
      this.change.emit(value);
    }
  }

  onInputChange(value) {
    const valueChanged = value !== this._value;
    if (valueChanged) {
      this.initMultiSelectedValues();
      this._value = value;
      this.onChange(value);
      this.change.emit(value);
    }
  }

  onBlur(value: string) {
    this.writeValue(value);
    this.onTouched();
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  /**
   * Focuses the search input field
   */
  public _focus() {
    if (!this.searchSelectInput || !this.matSelect.panel) {
      return;
    }
    // save and restore scrollTop of panel, since it will be reset by focus()
    // note: this is hacky
    const panel = this.matSelect.panel.nativeElement;
    const scrollTop = panel.scrollTop;

    // focus
    this.searchSelectInput.nativeElement.focus();

    panel.scrollTop = scrollTop;
  }

  /**
   * Resets the current search value
   * @param focus whether to focus after resetting
   */
  public _reset(focus?: boolean) {
    if (!this.searchSelectInput) {
      return;
    }
    this.searchSelectInput.nativeElement.value = '';
    this.onInputChange('');
    if (this.matOption && !focus) {
      // remove no entries found class on mat option
      this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
    }
    if (focus) {
      this._focus();
    }
  }

  /**
   * Sets the overlay class  to correct offsetY
   * so that the selected option is at the position of the select box when opening
   */
  private setOverlayClass() {
    if (this.overlayClassSet) {
      return;
    }
    const overlayClasses: string[] = ['cdk-overlay-pane-select-search'];

    if (!this.matOption) {
      // add offset to panel if component is not placed inside mat-option
      overlayClasses.push('cdk-overlay-pane-select-search-with-offset');
    }

    this.matSelect.overlayDir.attach
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        // note: this is hacky, but currently there is no better way to do this
        let element: HTMLElement = this.searchSelectInput.nativeElement;
        let overlayElement: HTMLElement;
        while (element = element.parentElement) {
          if (element.classList.contains('cdk-overlay-pane')) {
            overlayElement = element;
            break;
          }
        }
        if (overlayElement) {
          overlayClasses.forEach(overlayClass => {
            overlayElement.classList.add(overlayClass);
          });
        }
      });

    this.overlayClassSet = true;
  }


  /**
   * Initializes handling <mat-select [multiple]="true">
   * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
   */
  private initMultipleHandling() {
    // if <mat-select [multiple]="true">
    // store previously selected values and restore them when they are deselected
    // because the option is not available while we are currently filtering
    this.matSelect.valueChange
      .pipe(takeUntil(this._onDestroy))
      .subscribe((values) => {
        if (this.matSelect.multiple) {
          let restoreSelectedValues = false;
          if (this._value && this._value.length
            && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
            if (!values || !Array.isArray(values)) {
              values = [];
            }
            const optionValues = this.matSelect.options.map(option => option.value);
            this.previousSelectedValues.forEach(previousValue => {
              if (values.indexOf(previousValue) === -1 && optionValues.indexOf(previousValue) === -1) {
                // if a value that was selected before is deselected and not found in the options, it was deselected
                // due to the filtering, so we restore it.
                values.push(previousValue);
                restoreSelectedValues = true;
              }
            });
          }

          if (restoreSelectedValues) {
            this.matSelect._onChange(values);
          }

          this.previousSelectedValues = values;
        }
      });
  }

  /**
   * Scrolls the currently active option into the view if it is not yet visible.
   */
  private adjustScrollTopToFitActiveOptionIntoView(): void {
    if (this.matSelect.panel && this.matSelect.options.length > 0) {
      const matOptionHeight = this.getMatOptionHeight();
      const activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
      const labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
      // If the component is in a MatOption, the activeItemIndex will be offset by one.
      const indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
      const currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;

      const searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight
      const amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);

      const indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;

      if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
        this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
      } else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
        this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
      }
    }
  }

  /**
   *  Set the width of the innerSelectSearch to fit even custom scrollbars
   *  And support all Operation Systems
   */
  public updateInputWidth() {
    if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
      return;
    }
    let element: HTMLElement = this.innerSelectSearch.nativeElement;
    let panelElement: HTMLElement;
    while (element = element.parentElement) {
      if (element.classList.contains('mat-select-panel')) {
        panelElement = element;
        break;
      }
    }
    if (panelElement) {
      this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
    }
  }

  private getMatOptionHeight(): number {
    if (this.matSelect.options.length > 0) {
      return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
    }

    return 0;
  }

  /**
   *  Initialize this.previousSelectedValues once the first filtering occurs.
   */
  initMultiSelectedValues() {
    if (this.matSelect.multiple && !this._value) {
      this.previousSelectedValues = this.matSelect.options
        .filter(option => option.selected)
        .map(option => option.value);
    }
  }

  /**
   * Returns whether the "no entries found" message should be displayed
   */
  public _noEntriesFound(): boolean {
    if (!this._options) {
      return;
    }
    if (this.matOption) {
      return this.noEntriesFoundLabel && this.value && this._options.length === 1;
    } else {
      return this.noEntriesFoundLabel && this.value && this._options.length === 0;
    }
  }

}
