import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { map, mapTo, scan, startWith } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { Bank } from '../demo-data';

/**
 * Based upon: https://stackblitz.com/edit/mat-select-search-with-infinity-scroll
 */
@Component({
  selector: 'app-infinite-scroll-example',
  standalone: false,
  templateUrl: './infinite-scroll-example.component.html',
  styleUrls: ['./infinite-scroll-example.component.scss']
})
export class InfiniteScrollExampleComponent implements OnDestroy {

  @ViewChild('matSelectInfiniteScroll', { static: true } )
  infiniteScrollSelect: MatSelect;

  /** List with all available data, mocks some sort of backend data source */
  private mockBankList: Bank[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: String(i),
    name: `Bank ${i}`
  }));

  /** Control for the selected bank id */
  public bankCtrl: FormControl<string | null> = new FormControl<string | null>(null);

  /** Control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  /** List of data corresponding to the search input */
  private filteredData$: Observable<Bank[]> = this.bankFilterCtrl.valueChanges.pipe(
    startWith(''),
    map(searchKeyword => {
      if (!searchKeyword) {
        return this.mockBankList;
      }
      return this.mockBankList.filter((bank) =>
        bank.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
      );
    })
  );

  /** Number of items added per batch */
  batchSize = 20;

  private incrementBatchOffset$: Subject<void> = new Subject<void>();
  private resetBatchOffset$: Subject<void> = new Subject<void>();

  /** Minimum offset needed for the batch to ensure the selected option is displayed */
  private minimumBatchOffset$: Observable<number> = combineLatest([
    this.filteredData$,
    this.bankFilterCtrl.valueChanges
  ]).pipe(
    map(([filteredData]) => {
      if (!this.bankFilterCtrl.value && this.bankCtrl.value) {
        const index = filteredData.findIndex(bank => bank.id === this.bankCtrl.value);
        return index + this.batchSize;
      } else {
        return 0;
      }
    }),
    startWith(0)
  );

  /** Length of the visible data / start of the next batch */
  private batchOffset$ = combineLatest([
    merge(
      this.incrementBatchOffset$.pipe(mapTo(true)),
      this.resetBatchOffset$.pipe(mapTo(false))
    ),
    this.minimumBatchOffset$
  ]).pipe(
    scan((batchOffset, [doIncrement, minimumOffset]) => {
      if (doIncrement) {
        return Math.max(batchOffset + this.batchSize, minimumOffset + this.batchSize);
      } else {
        return Math.max(minimumOffset, this.batchSize);
      }
    }, this.batchSize),
  );


  /** List of data, filtered by the search keyword, limited to the length accumulated by infinity scrolling */
  filteredBatchedData$: Observable<Bank[]> = combineLatest([
    this.filteredData$,
    this.batchOffset$
  ]).pipe(
    map(([filteredData, batchOffset]) => filteredData.slice(0, batchOffset))
  );

  private destroy$: Subject<void> = new Subject<void>();



  ngOnDestroy() {
    this.destroy$.next();
  }

  /**
   * Load the next batch
   */
  getNextBatch(): void {
    this.incrementBatchOffset$.next();
  }

}
