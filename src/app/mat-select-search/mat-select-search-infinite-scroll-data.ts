import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { map, mapTo, scan, startWith, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatSelectSearchData } from './mat-select-search-data';

export class MatSelectSearchInfiniteScrollData<T> extends MatSelectSearchData<T> {

  /** number of items added per batch */
  public batchSize = 20;

  private incrementBatchOffset$: Subject<void> = new Subject<void>();
  private resetBatchOffset$: Subject<void> = new Subject<void>();

  private minimumBatchOffset$: Observable<number> = combineLatest([
    this.filtered,
    this.searchCtrl.valueChanges
  ]).pipe(
    map(([filteredData, searchValue]) => {
      if (!this.searchCtrl.value && this.selectedCtrl.value) {
        const index = filteredData.findIndex(option => this.compareWith(option, this.selectedCtrl.value));
        return index + this.batchSize;
      } else {
        return 0;
      }
    }),
    startWith(0)
  );

  /** length of the visible data / start of the next batch */
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

  /** list of data, filtered by the search keyword, limited to the length accumulated by infinity scrolling */
  filteredBatchedData$: Observable<T[]> = combineLatest([
    this.filtered,
    this.batchOffset$
  ]).pipe(
    map(([filteredData, batchOffset]) => filteredData.slice(0, batchOffset))
  );
  private compareWith: (o1: any, o2: any) => boolean;

  init(select: MatSelect, source: T[], filterWith: (item: T) => string, compareWith?: (o1: T, o2: T) => boolean) {
    super.init(select, source, filterWith, compareWith);
    this.compareWith = select.compareWith;
    select.openedChange.pipe(takeUntil(this.destroySubject)).subscribe(opened => {
      // after opening, reset the batch offset
      if (opened) {
        this.resetBatchOffset$.next();
      }
    });
  }

  /**
   * Load the next batch
   */
  getNextBatch(): void {
    this.incrementBatchOffset$.next();
  }


}
