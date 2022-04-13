import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { debounceTime, take, takeUntil, tap } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

export class MatSelectSearchData<T> {

  protected source: T[] = [];

  /**
   * dynamically filtered
   */
  public filtered: ReplaySubject<T[]> = new ReplaySubject<T[]>(1);

  /**
   * selected option(s)
   */
  public selectedCtrl: FormControl = new FormControl();

  /**
   * user typed filter
   */
  public searchCtrl: FormControl = new FormControl();

  protected destroySubject = new Subject<void>();

  protected filterWith: (o: T, search?: string) => string | boolean;

  protected debounceTime = 100;

  /** flag to set the toggle all checkbox state */
  public isIndeterminate = false;
  /** flag to set the toggle all checkbox state */
  public isChecked = false;

  /**
   * transformation to apply before filter.
   * Applied to both filter and options.
   * Default value is lowerCase.
   * Can be enriched to handle accents or spaces.
   * @param s
   */
  public transformWith = (s: String) => s.toLowerCase();

  /**
   * Define the unfiltered source
   * @param source
   */
  setSource(source: T[]) {
    this.source = source;
    this.filtered.next(this.source.slice());
  }

  /**
   * Initialize.
   * Don't forget to destroy
   * @param select MatSelect binded componant
   * @param source data to search in
   * @param filterWith extract the attribute to use for search
   * @param compareWith do the equality comparison. usually using ids
   */
  public init(select: MatSelect, source: T[],
              filterWith: (item: T) => string, compareWith?: (o1: T, o2: T) => boolean) {
    this.doInit(select, source, filterWith, compareWith);
  }

  protected doInit(select: MatSelect, source: T[],
                   filterWith: (item: T, search: string) => string| boolean, compareWith?: (o1: T, o2: T) => boolean) {
    this.setSource(source);
    if (select.multiple && !this.selectedCtrl.value) {
      this.selectedCtrl.setValue([]);
    }
    this.filterWith = filterWith;
    this.searchCtrl.valueChanges
      .pipe(takeUntil(this.destroySubject), debounceTime(this.debounceTime))
      .subscribe(() => {
        this.filter();
        if (select.multiple) {
          this.setToggleAllCheckboxState();
        }
      });
    if (select.multiple) {
      this.selectedCtrl.valueChanges
        .pipe(takeUntil(this.destroySubject)).subscribe(() => {
        this.setToggleAllCheckboxState();
      });
    }
    select.compareWith = compareWith || select.compareWith;
  }

  /**
   * Destroy
   */
  destroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
    this.filtered.unsubscribe();
  }

  private filter() {
    if (this.source) {
      let search = this.searchCtrl.value;
      if (!search) {
        this.filtered.next(this.source.slice());
      } else {
        search = this.transformWith(search);
        this.doFilter(search);
      }
    }
  }

  protected doFilter(search: string) {
    this.filtered.next(
      this.source.filter(option => this.transformWith(this.filterWith(option) as string).indexOf(search) > -1)
    );
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filtered.pipe(take(1), takeUntil(this.destroySubject))
      .subscribe(val => {
          this.selectedCtrl.patchValue(selectAllValue ? val : []);
      });
  }

  private setToggleAllCheckboxState() {
    let filteredLength = 0;
    if (this.selectedCtrl && this.selectedCtrl.value) {
      this.filtered.forEach(el => {
        if (this.selectedCtrl.value.indexOf(el) > -1) {
          filteredLength++;
        }
      });
      this.isIndeterminate = filteredLength > 0 && filteredLength < this.source.length;
      this.isChecked = filteredLength > 0 && filteredLength === this.source.length;
    }
  }
}
