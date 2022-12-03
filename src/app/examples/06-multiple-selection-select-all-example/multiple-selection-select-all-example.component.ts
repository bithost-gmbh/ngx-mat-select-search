import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

import { Bank, BANKS } from '../demo-data';

@Component({
  selector: 'app-multiple-selection-select-all-example',
  templateUrl: './multiple-selection-select-all-example.component.html',
  styleUrls: ['./multiple-selection-select-all-example.component.scss']
})
export class MultipleSelectionSelectAllExampleComponent implements OnInit, AfterViewInit, OnDestroy {

  /** list of banks */
  protected banks: Bank[] = BANKS;

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl<Bank[]> = new FormControl<Bank[]>([]);

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl<string> = new FormControl<string>('');

  /** list of banks filtered by search keyword */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** local copy of filtered banks to help set the toggle all checkbox state */
  protected filteredBanksCache: Bank[] = [];

  /** flags to set the toggle all checkbox state */
  isIndeterminate = false;
  isChecked = false;

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // set initial selection
    this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    // load the initial bank list
    this.filteredBanksMulti.next(this.banks.slice());

    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
        this.setToggleAllCheckboxState();
      });

      // listen for multi select field value changes
    this.bankMultiCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.setToggleAllCheckboxState();
    });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredBanksMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.bankMultiCtrl.patchValue(val);
        } else {
          this.bankMultiCtrl.patchValue([]);
        }
      });
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredBanksMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
      });
  }

  protected filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksCache = this.banks.slice();
      this.filteredBanksMulti.next(this.filteredBanksCache);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksCache = this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
    this.filteredBanksMulti.next(this.filteredBanksCache);
  }

  protected setToggleAllCheckboxState() {
    let filteredLength = 0;
    if (this.bankMultiCtrl && this.bankMultiCtrl.value) {
      this.filteredBanksCache.forEach(el => {
        if (this.bankMultiCtrl.value.indexOf(el) > -1) {
          filteredLength++;
        }
      });
      this.isIndeterminate = filteredLength > 0 && filteredLength < this.filteredBanksCache.length;
      this.isChecked = filteredLength > 0 && filteredLength === this.filteredBanksCache.length;
    }
  }

}
