import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import {VERSION} from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatSelect} from '@angular/material';

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

interface Bank {
 id: string;
 name: string;
}

interface BankGroup {
  name: string;
  banks: Bank[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  version = VERSION;

  /** control for the selected bank */
  public bankCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();

    /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();

  /** control for the selected bank for option groups */
  public bankGroupsCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword for option groups */
  public bankGroupsFilterCtrl: FormControl = new FormControl();

  /** list of banks */
  private banks: Bank[] = [
    {name: 'Bank A (Switzerland)', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank Kolombia (United States of America)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'}
  ];

  /** list of bank groups */
  private bankGroups: BankGroup[] = [
    {
      name: 'Switzerland',
      banks: [
        {name: 'Bank A', id: 'A'},
        {name: 'Bank B', id: 'B'}
      ]
    },
    {
      name: 'France',
      banks: [
        {name: 'Bank C', id: 'C'},
        {name: 'Bank D', id: 'D'},
        {name: 'Bank E', id: 'E'},
      ]
    },
    {
      name: 'Italy',
      banks: [
        {name: 'Bank F', id: 'F'},
        {name: 'Bank G', id: 'G'},
        {name: 'Bank H', id: 'H'},
        {name: 'Bank I', id: 'I'},
        {name: 'Bank J', id: 'J'},
      ]
    },
    {
      name: 'United States of America',
      banks: [
        {name: 'Bank Kolombia', id: 'K'},
      ]
    },
    {
      name: 'Germany',
      banks: [
        {name: 'Bank L', id: 'L'},
        {name: 'Bank M', id: 'M'},
        {name: 'Bank N', id: 'N'},
        {name: 'Bank O', id: 'O'},
        {name: 'Bank P', id: 'P'},
        {name: 'Bank Q', id: 'Q'},
        {name: 'Bank R', id: 'R'}
      ]
    }
  ];

  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** list of banks filtered by search keyword for multi-selection */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** list of bank groups filtered by search keyword for option groups */
  public filteredBankGroups: ReplaySubject<BankGroup[]> = new ReplaySubject<BankGroup[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;
  @ViewChild('multiSelect') multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    // set initial selection
    this.bankCtrl.setValue(this.banks[10]);
    this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    this.filteredBanksMulti.next(this.banks.slice());
    this.filteredBankGroups.next(this.copyBankGroups(this.bankGroups));

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });
    this.bankGroupsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBankGroups();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
        this.multiSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
      });
  }

  private filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterBankGroups() {
    if (!this.bankGroups) {
      return;
    }
    // get the search keyword
    let search = this.bankGroupsFilterCtrl.value;
    const bankGroupsCopy = this.copyBankGroups(this.bankGroups);
    if (!search) {
      this.filteredBankGroups.next(bankGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBankGroups.next(
      bankGroupsCopy.filter(bankGroup => {
        const showBankGroup = bankGroup.name.toLowerCase().indexOf(search) > -1;
        if (!showBankGroup) {
          bankGroup.banks = bankGroup.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
        }
        return bankGroup.banks.length > 0;
      })
    );
  }

  private copyBankGroups(bankGroups: BankGroup[]) {
    const bankGroupsCopy = [];
    bankGroups.forEach(bankGroup => {
      bankGroupsCopy.push({
        name: bankGroup.name,
        banks: bankGroup.banks.slice()
      });
    });
    return bankGroupsCopy;
  }
}
