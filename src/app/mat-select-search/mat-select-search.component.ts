/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { A, DOWN_ARROW, END, ENTER, ESCAPE, HOME, NINE, SPACE, UP_ARROW, Z, ZERO } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { delay, filter, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { configurableDefaultOptions, MAT_SELECTSEARCH_DEFAULT_OPTIONS, MatSelectSearchOptions } from './default-options';
import { MatSelectNoEntriesFoundDirective } from './mat-select-no-entries-found.directive';

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
 *         <mat-option>
 *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         </mat-option>
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatSelectSearchComponent implements OnInit, OnDestroy, ControlValueAccessor {

  /** Label of the search placeholder */
  @Input() placeholderLabel = 'Suche';

  /** Type of the search input field */
  @Input() type = 'text';

  /** Font-based icon used for displaying Close-Icon */
  @Input() closeIcon = 'close';

  /** Svg-based icon used for displaying Close-Icon. If set, closeIcon is overridden */
  @Input() closeSvgIcon?: string;

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

  /** Enable clear input on escape pressed */
  @Input() enableClearOnEscapePressed = false;

  /**
   * Prevents home / end key being propagated to mat-select,
   * allowing to move the cursor within the search input instead of navigating the options
   */
  @Input() preventHomeEndKeyPropagation = false;

  /** Disables scrolling to active options when option list changes. Useful for server-side search */
  @Input() disableScrollToActiveOnOptionsChanged = false;

  /** Adds 508 screen reader support for search box */
  @Input() ariaLabel = 'dropdown search';

  /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
  @Input() showToggleAllCheckbox = false;

  /** select all checkbox checked state */
  @Input() toggleAllCheckboxChecked = false;

  /** select all checkbox indeterminate state */
  @Input() toggleAllCheckboxIndeterminate = false;

  /** Display a message in a tooltip on the toggle-all checkbox */
  @Input() toggleAllCheckboxTooltipMessage = '';

  /** Define the position of the tooltip on the toggle-all checkbox. */
  @Input() toggleAllCheckboxTooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'below';

  /** Show/Hide the search clear button of the search input */
  @Input() hideClearSearchButton = false;

  /**
   * Always restore selected options on selectionChange for mode multi (e.g. for lazy loading/infinity scrolling).
   * Defaults to false, so selected options are only restored while filtering is active.
   */
  @Input() alwaysRestoreSelectedOptionsMulti = false;

  /** Output emitter to send to parent component with the toggle all boolean */
  @Output() toggleAll = new EventEmitter<boolean>();

  /** Reference to the search input field */
  @ViewChild('searchSelectInput', { read: ElementRef, static: true }) searchSelectInput: ElementRef;

  /** Reference to the search input field */
  @ViewChild('innerSelectSearch', { read: ElementRef, static: true }) innerSelectSearch: ElementRef;

  /** Reference to custom search input clear icon */
  @ContentChild(MatSelectSearchClearDirective) clearIcon: MatSelectSearchClearDirective;

  /** Reference to custom no entries found element */
  @ContentChild(MatSelectNoEntriesFoundDirective) noEntriesFound: MatSelectNoEntriesFoundDirective;

  /** Current search value */
  get value(): string {
    return this._formControl.value;
  }
  private _lastExternalInputValue: string;

  onTouched: Function = (_: any) => { };

  /** Reference to the MatSelect options */
  public set _options(_options: QueryList<MatOption>) {
    this._options$.next(_options);
  }
  public get _options(): QueryList<MatOption> {
    return this._options$.getValue();
  }
  public _options$: BehaviorSubject<QueryList<MatOption>> = new BehaviorSubject<QueryList<MatOption>>(null);

  private optionsList$: Observable<MatOption[]> = this._options$.pipe(
    switchMap(_options => _options ?
      _options.changes.pipe(
        map(options => options.toArray()),
        startWith<MatOption[]>(_options.toArray()),
      ) : of(null)
    )
  );

  private optionsLength$: Observable<number> = this.optionsList$.pipe(
    map(options => options ? options.length : 0)
  );

  /** Previously selected values when using <mat-select [multiple]="true">*/
  private previousSelectedValues: any[];

  public _formControl: FormControl<string> = new FormControl<string>('');

  /** whether to show the no entries found message */
  public _showNoEntriesFound$: Observable<boolean> = combineLatest([
    this._formControl.valueChanges,
    this.optionsLength$
  ]).pipe(
    map(([value, optionsLength]) => this.noEntriesFoundLabel && value
      && optionsLength === this.getOptionsLengthOffset())
  );

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  /** Reference to active descendant for ARIA Support. */
  private activeDescendant: HTMLElement;

  constructor(@Inject(MatSelect) public matSelect: MatSelect,
    public changeDetectorRef: ChangeDetectorRef,
    private _viewportRuler: ViewportRuler,
    @Optional() @Inject(MatOption) public matOption: MatOption = null,
    @Optional() @Inject(MatFormField) public matFormField: MatFormField = null,
    @Optional() @Inject(MAT_SELECTSEARCH_DEFAULT_OPTIONS) defaultOptions?: MatSelectSearchOptions
  ) {
    this.applyDefaultOptions(defaultOptions);
  }

  private applyDefaultOptions(defaultOptions: MatSelectSearchOptions) {
    if (!defaultOptions) {
      return;
    }
    for (const key of configurableDefaultOptions) {
      if (defaultOptions.hasOwnProperty(key)) {
        (this[key] as any) = defaultOptions[key];
      }
    }
  }

  ngOnInit() {
    // set custom mat-option class if the component was placed inside a mat-option
    if (this.matOption) {
      this.matOption.disabled = true;
      this.matOption._getHostElement().classList.add('contains-mat-select-search');
      this.matOption._getHostElement().setAttribute('aria-hidden', 'true');
    } else {
      console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
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
      .pipe(
        take(1),
        switchMap((_) => {
        this._options = this.matSelect.options;

        // Closure variable for tracking the most recent first option.
        // In order to avoid avoid causing the list to
        // scroll to the top when options are added to the bottom of
        // the list (eg: infinite scroll), we compare only
        // the changes to the first options to determine if we
        // should set the first item as active.
        // This prevents unnecessary scrolling to the top of the list
        // when options are appended, but allows the first item
        // in the list to be set as active by default when there
        // is no active selection
        let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];

        return this._options.changes
          .pipe(tap(() => {
            // avoid "expression has been changed" error
            setTimeout(() => {
              // Convert the QueryList to an array
              const options = this._options.toArray();

              // The true first item is offset by 1
              const currentFirstOption = options[this.getOptionsLengthOffset()];

              const keyManager = this.matSelect._keyManager;
              if (keyManager && this.matSelect.panelOpen) {

                // set first item active and input width

                // Check to see if the first option in these changes is different from the previous.
                const firstOptionIsChanged = !this.matSelect.compareWith(previousFirstOption, currentFirstOption);

                // CASE: The first option is different now.
                // Indiciates we should set it as active and scroll to the top.
                if (firstOptionIsChanged
                  || !keyManager.activeItem
                  || !options.find(option => this.matSelect.compareWith(option, keyManager.activeItem))) {
                  keyManager.setFirstItemActive();
                }

                // wait for panel width changes
                setTimeout(() => {
                  this.updateInputWidth();
                });
              }

              // Update our reference
              previousFirstOption = currentFirstOption;
            });
          }));
        })
      )
      .pipe(takeUntil(this._onDestroy))
      .subscribe();

    // add or remove css class depending on whether to show the no entries found message
    // note: this is hacky
    this._showNoEntriesFound$.pipe(
      takeUntil(this._onDestroy)
    ).subscribe(showNoEntriesFound => {
      // set no entries found class on mat option
      if (this.matOption) {
        if (showNoEntriesFound) {
          this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
        } else {
          this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
        }
      }
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

    this.optionsList$.pipe(
      takeUntil(this._onDestroy)
    ).subscribe(() => {
      // update view when available options change
      this.changeDetectorRef.markForCheck();
    });
  }

  _emitSelectAllBooleanToParent(state: boolean) {
    this.toggleAll.emit(state);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  _isToggleAllCheckboxVisible(): boolean {
    return this.matSelect.multiple && this.showToggleAllCheckbox;
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

    if (this.matSelect.multiple && event.key && event.keyCode === ENTER) {
      // Regain focus after multiselect, so we can further type
      setTimeout(() => this._focus());
    }

    // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
    if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
      this._reset(true);
      event.stopPropagation();
    }
  }

  /**
   * Handles the key up event with MatSelect.
   * Allows e.g. the announcing of the currently activeDescendant by screen readers.
   */
  _handleKeyup(event: KeyboardEvent) {
    if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
      const ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();
      const index = this._options.toArray().findIndex(item => item.id === ariaActiveDescendantId);
      if (index !== -1) {
        this.unselectActiveDescendant();
        this.activeDescendant = this._options.toArray()[index]._getHostElement();
        this.activeDescendant.setAttribute('aria-selected', 'true');
        this.searchSelectInput.nativeElement.setAttribute('aria-activedescendant', ariaActiveDescendantId);
      }
    }
  }

  writeValue(value: string) {
    this._lastExternalInputValue = value;
    this._formControl.setValue(value);
    this.changeDetectorRef.markForCheck();
  }

  onBlur() {
    this.unselectActiveDescendant();
    this.onTouched();
  }

  registerOnChange(fn: (value: string) => void) {
    this._formControl.valueChanges.pipe(
      filter(value => value !== this._lastExternalInputValue),
      tap(() => this._lastExternalInputValue = undefined),
      takeUntil(this._onDestroy)
    ).subscribe(fn);
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
    this._formControl.setValue('');
    if (focus) {
      this._focus();
    }
  }


  /**
   * Initializes handling <mat-select [multiple]="true">
   * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
   */
  private initMultipleHandling() {
    if (!this.matSelect.ngControl) {
      if (this.matSelect.multiple) {
        // note: the access to matSelect.ngControl (instead of matSelect.value / matSelect.valueChanges)
        // is necessary to properly work in multi-selection mode.
        console.error('the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true');
      }
      return;
    }
    // if <mat-select [multiple]="true">
    // store previously selected values and restore them when they are deselected
    // because the option is not available while we are currently filtering
    this.previousSelectedValues = this.matSelect.ngControl.value;

    this.matSelect.ngControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe((values) => {
        let restoreSelectedValues = false;
        if (this.matSelect.multiple) {
          if ((this.alwaysRestoreSelectedOptionsMulti || (this._formControl.value && this._formControl.value.length))
            && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
            if (!values || !Array.isArray(values)) {
              values = [];
            }
            const optionValues = this.matSelect.options.map(option => option.value);
            this.previousSelectedValues.forEach(previousValue => {
              if (!values.some(v => this.matSelect.compareWith(v, previousValue))
                && !optionValues.some(v => this.matSelect.compareWith(v, previousValue))) {
                // if a value that was selected before is deselected and not found in the options, it was deselected
                // due to the filtering, so we restore it.
                values.push(previousValue);
                restoreSelectedValues = true;
              }
            });
          }
        }
        this.previousSelectedValues = values;

        if (restoreSelectedValues) {
          this.matSelect._onChange(values);
        }
      });
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

  /**
   * Determine the offset to length that can be caused by the optional matOption used as a search input.
   */
  private getOptionsLengthOffset(): number {
    if (this.matOption) {
      return 1;
    } else {
      return 0;
    }
  }

  private unselectActiveDescendant() {
    this.activeDescendant?.removeAttribute('aria-selected');
    this.searchSelectInput.nativeElement.removeAttribute('aria-activedescendant');
  }

}
