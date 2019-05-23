/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule, MatSelect,
  MatSelectModule
} from '@angular/material';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import {delay, take} from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

import { MatSelectSearchComponent } from './mat-select-search.component';
import { NgxMatSelectSearchModule } from './ngx-mat-select-search.module';

/* tslint:disable:component-selector */

interface Bank {
  id: string;
  name: string;
}

@Component({
  selector: 'mat-select-search-test',
  template: `
    <h3>Single selection</h3>
    <p>
      <mat-form-field>
        <mat-select [formControl]="bankCtrl" placeholder="Bank" #selectSingle>
          <ngx-mat-select-search [formControl]="bankFilterCtrl" #selectSearchSingle></ngx-mat-select-search>
          <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank">
            {{bank.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </p>
    <p>
      Selected Bank: {{bankCtrl.value?.name}}
    </p>
    
    <h3>Single selection inside mat-option</h3>
    <p>
      <mat-form-field>
        <mat-select [formControl]="bankCtrlMatOption" placeholder="Bank" #selectSingleMatOption>
          <mat-option>
            <ngx-mat-select-search [formControl]="bankFilterCtrlMatOption" #selectSearchSingleMatOption></ngx-mat-select-search>
          </mat-option>
          <mat-option *ngFor="let bank of filteredBanksMatOption | async" [value]="bank">
            {{bank.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </p>
    <p>
      Selected Bank: {{bankCtrlMatOption.value?.name}}
    </p>
    
    <h3>Multiple selection</h3>
    <p>
      <mat-form-field>
        <mat-select [formControl]="bankMultiCtrl" placeholder="Banks" [multiple]="true" #selectMulti>
          <ngx-mat-select-search [formControl]="bankMultiFilterCtrl" #selectSearchMulti></ngx-mat-select-search>
          <mat-option *ngFor="let bank of filteredBanksMulti | async" [value]="bank">
            {{bank.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </p>
    <p>
      Selected Banks:
    </p>
    <ul *ngFor="let bank of bankMultiCtrl?.value">
      <li>{{bank.name}}</li>
    </ul>
  `,
})
export class MatSelectSearchTestComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('selectSingle') matSelect: MatSelect;
  @ViewChild('selectSingleMatOption') matSelectMatOption: MatSelect;
  @ViewChild('selectMulti') matSelectMulti: MatSelect;
  @ViewChild('selectSearchSingle') matSelectSearch: MatSelectSearchComponent;
  @ViewChild('selectSearchSingleMatOption') matSelectSearchMatOption: MatSelectSearchComponent;
  @ViewChild('selectSearchMulti') matSelectSearchMulti: MatSelectSearchComponent;

  // control for the selected bank
  public bankCtrl: FormControl = new FormControl();
  // control for the selected bank
  public bankCtrlMatOption: FormControl = new FormControl();
  // control for the MatSelect filter keyword
  public bankFilterCtrl: FormControl = new FormControl();
  // control for the MatSelect filter keyword
  public bankFilterCtrlMatOption: FormControl = new FormControl();

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();


  // list of banks
  public banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}, {name: 'Bank DC', id: 'DC'}];

  public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
  public filteredBanksMatOption: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** list of banks filtered by search keyword for multi-selection */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  public initialSingleSelection: Bank = null;
  public initialSingleSelectionMatOption: Bank = null;
  public initialMultiSelection: Bank[] = [];


  // Subject that emits when the component has been destroyed.
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    // set initial selection
    if (this.initialSingleSelection) {
      this.bankCtrl.setValue(this.initialSingleSelection);
    }
    if (this.initialSingleSelectionMatOption) {
      this.bankCtrlMatOption.setValue(this.initialSingleSelectionMatOption);
    }
    if (this.initialMultiSelection) {
      this.bankMultiCtrl.setValue(this.initialMultiSelection);
    }



    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    this.filteredBanksMatOption.next(this.banks.slice());
    this.filteredBanksMulti.next(this.banks.slice());

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    this.bankFilterCtrlMatOption.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMatOption();
      });
    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
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
        this.matSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
        this.matSelectMatOption.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
        this.matSelectMulti.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
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

  private filterBanksMatOption() {
    if (!this.banks) {
      return;
    }

    // get the search keyword
    let search = this.bankFilterCtrlMatOption.value;
    if (!search) {
      this.filteredBanksMatOption.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the banks
    this.filteredBanksMatOption.next(
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
}

describe('MatSelectSearchComponent', () => {
  let component: MatSelectSearchTestComponent;
  let fixture: ComponentFixture<MatSelectSearchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule
      ],
      declarations: [MatSelectSearchTestComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectSearchTestComponent);
    component = fixture.componentInstance;
  });

  describe('without initial selection', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show a search field and focus it when opening the select', (done) => {

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(
              take(1),
              delay(1)
            )
            .subscribe((opened) => {
              expect(opened).toBe(true);
              const searchField = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner .mat-select-search-input');
              const searchInner = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner');
              expect(searchInner).toBeTruthy();
              expect(searchField).toBeTruthy();
              // check focus
              expect(searchField).toBe(document.activeElement);

              const optionElements = document.querySelectorAll('.cdk-overlay-pane-select-search mat-option');
              expect(component.matSelect.options.length).toBe(4);
              expect(optionElements.length).toBe(4);

              done();
            });

        });

    });


    it('should filter the options available and hightlight the first option in the list, filter the options by input "c" and reset the list', (done) => {

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(take(1))
            .subscribe((opened) => {
              expect(opened).toBe(true);
              const searchField = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner .mat-select-search-input');
              expect(searchField).toBeTruthy();

              expect(component.matSelect.options.length).toBe(4);

              // search for "c"
              component.matSelectSearch.onInputChange('c');
              fixture.detectChanges();

              expect(component.bankFilterCtrl.value).toBe('c');
              expect(component.matSelect.panelOpen).toBe(true);

              component.filteredBanks
                .pipe(take(1))
                .subscribe(() => {
                  fixture.detectChanges();

                  setTimeout(() => {
                    expect(component.matSelect.options.length).toBe(2);
                    expect(component.matSelect.options.first.value.id).toBe('C');
                    expect(component.matSelect.options.first.active).toBe(true, 'first active');

                    component.matSelectSearch._reset(true);
                    fixture.detectChanges();

                    // check focus
                    expect(searchField).toBe(document.activeElement);
                    expect(component.matSelect.panelOpen).toBe(true);

                    component.filteredBanks
                      .pipe(take(1))
                      .subscribe(() => {
                        fixture.detectChanges();
                        if (component.matSelectSearch.clearSearchInput) {
                          expect(component.matSelect.options.length).toBe(4);
                        } else {
                          expect(component.matSelect.options.length).toBe(2);
                        }

                        done();
                      });
                  });

                });

            });

        });

    });

    describe('inside mat-option', () => {

      it('should show a search field and focus it when opening the select', (done) => {

        component.filteredBanksMatOption
          .pipe(
            take(1),
            delay(1)
          )
          .subscribe(() => {
            // when the filtered banks are initialized
            fixture.detectChanges();

            component.matSelectMatOption.open();
            fixture.detectChanges();

            component.matSelectMatOption.openedChange
              .pipe(
                take(1),
                delay(1)
              )
              .subscribe((opened) => {
                expect(opened).toBe(true);
                const searchField = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner .mat-select-search-input');
                const searchInner = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner');
                expect(searchInner).toBeTruthy();
                expect(searchField).toBeTruthy();
                // check focus
                expect(searchField).toBe(document.activeElement);

                const optionElements = document.querySelectorAll('.cdk-overlay-pane-select-search mat-option');
                expect(component.matSelectMatOption.options.length).toBe(5);
                expect(optionElements.length).toBe(5);

                done();
              });

          });

      });


      it('should filter the options available and hightlight the first option in the list, filter the options by input "c" and reset the list', (done) => {

        component.filteredBanksMatOption
          .pipe(
            take(1),
            delay(1)
          )
          .subscribe(() => {
            // when the filtered banks are initialized
            fixture.detectChanges();

            component.matSelectMatOption.open();
            fixture.detectChanges();

            component.matSelectMatOption.openedChange
              .pipe(take(1))
              .subscribe((opened) => {
                expect(opened).toBe(true);
                const searchField = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner .mat-select-search-input');
                expect(searchField).toBeTruthy();

                expect(component.matSelectMatOption.options.length).toBe(5);

                // search for "c"
                component.matSelectSearchMatOption.onInputChange('c');
                fixture.detectChanges();

                expect(component.bankFilterCtrlMatOption.value).toBe('c');
                expect(component.matSelectMatOption.panelOpen).toBe(true);

                component.filteredBanks
                  .pipe(take(1))
                  .subscribe(() => {
                    fixture.detectChanges();

                    setTimeout(() => {
                      expect(component.matSelectMatOption.options.length).toBe(3);
                      expect(component.matSelectMatOption.options.toArray()[1].value.id).toBe('C');
                      expect(component.matSelectMatOption.options.toArray()[1].active).toBe(true, 'first active');

                      component.matSelectSearchMatOption._reset(true);
                      fixture.detectChanges();

                      // check focus
                      expect(searchField).toBe(document.activeElement);
                      expect(component.matSelectMatOption.panelOpen).toBe(true);

                      component.filteredBanks
                        .pipe(take(1))
                        .subscribe(() => {
                          fixture.detectChanges();
                          expect(component.matSelectMatOption.options.length).toBe(5);

                          done();
                        });
                    });

                  });

              });

          });

      });

    })

  });

  describe('with initial selection', () => {

    it('should set the initial selection of MatSelect', async((done) => {
      component.initialSingleSelection = component.banks[3];
      fixture.detectChanges();

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {

          // when the filtered banks are initialized
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            component.matSelect.options.changes
              .pipe(take(1))
              .subscribe(() => {

                expect(component.matSelect.value).toEqual(component.banks[3]);

                component.matSelect.open();
                fixture.detectChanges();

                component.matSelect.openedChange
                  .pipe(take(1))
                  .subscribe((opened) => {
                    expect(opened).toBe(true);
                    expect(component.matSelect.value).toEqual(component.banks[3]);
                    expect(component.bankCtrl.value).toEqual(component.banks[3]);

                    done();
                  });
              });

          });

        });

    }));

    it('set the initial selection with multi=true and filter the options available, filter the options by input "c" and select an option', async((done) => {
      component.initialMultiSelection = [component.banks[1]];
      fixture.detectChanges();

      component.filteredBanksMulti
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            component.matSelect.options.changes
              .pipe(take(1))
              .subscribe(() => {

                component.matSelectMulti.open();
                fixture.detectChanges();

                component.matSelectMulti.openedChange
                  .pipe(take(1))
                  .subscribe((opened) => {
                    expect(opened).toBe(true);
                    expect(component.matSelectMulti.value).toEqual([component.banks[1]]);
                    expect(component.bankMultiCtrl.value).toEqual([component.banks[1]]);

                    const searchField = document.querySelector('.cdk-overlay-pane-select-search .mat-select-search-inner .mat-select-search-input');
                    expect(searchField).toBeTruthy();

                    expect(component.matSelectMulti.options.length).toBe(4);

                    // search for "c"
                    component.matSelectSearchMulti.onInputChange('c');
                    fixture.detectChanges();

                    expect(component.bankFilterCtrl.value).toBe('c');
                    expect(component.matSelectMulti.panelOpen).toBe(true);

                    component.filteredBanks
                      .pipe(take(1))
                      .subscribe(() => {
                        fixture.detectChanges();

                        setTimeout(() => {
                          expect(component.matSelectMulti.options.length).toBe(2);
                          expect(component.matSelectMulti.options.first.value.id).toBe('C');
                          expect(component.matSelectMulti.options.first.active).toBe(true, 'first active');

                          component.matSelectMulti.options.first._selectViaInteraction();

                          fixture.detectChanges();

                          // check focus
                          expect(component.matSelectMulti.panelOpen).toBe(true);

                          setTimeout(() => {
                            fixture.detectChanges();
                            expect(component.matSelectMulti.value).toEqual([component.banks[1], component.banks[2]]);
                            expect(component.bankMultiCtrl.value).toEqual([component.banks[1], component.banks[2]]);

                            // search for "d"
                            component.matSelectSearchMulti.onInputChange('d');
                            fixture.detectChanges();

                            expect(component.bankFilterCtrl.value).toBe('d');
                            expect(component.matSelectMulti.panelOpen).toBe(true);

                            component.filteredBanks
                              .pipe(take(1))
                              .subscribe(() => {
                                fixture.detectChanges();

                                setTimeout(() => {
                                  expect(component.matSelectMulti.options.length).toBe(1);
                                  expect(component.matSelectMulti.options.first.value.id).toBe('DC');
                                  expect(component.matSelectMulti.options.first.active).toBe(true, 'first active');

                                  component.matSelectMulti.options.first._selectViaInteraction();

                                  fixture.detectChanges();

                                  // check focus
                                  expect(component.matSelectMulti.panelOpen).toBe(true);

                                  setTimeout(() => {
                                    fixture.detectChanges();
                                    expect(component.matSelectMulti.value).toEqual([component.banks[1], component.banks[2], component.banks[3]]);
                                    expect(component.bankMultiCtrl.value).toEqual([component.banks[1], component.banks[2], component.banks[3]]);
                                    done();

                                  });
                                });

                              });

                          });
                        });

                      });

                  });
              });
          });


        });
    }));

  });

});
