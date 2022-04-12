import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatSelectSearchData } from './mat-select-search-data';

export class MatSelectSearchGroupData<T> extends MatSelectSearchData<T> {

  /**
   * Allows to copy the data.
   * To use for option groups if your filter corrupt original data
   */
  public copyWith = (source: T[]) => source;

  /**
   * Initialize groups.
   * Don't forget to destroy
   * @param select MatSelect binded componant
   * @param source data to search in
   * @param filterGroupWith filter the group and remove non mathing items out of it. don't forget to use transformWith to the items.
   * @param compareWith do the equality comparison. usually using ids
   * @param copyWith do the copy to be free to remove items
   */
  public initGroups(select: MatSelect, source: T[],
                    filterGroupWith: (group: T, search: string) => boolean, compareWith: (o1: T, o2: T) => boolean,
                    copyWith:  (source: T[]) => T[]) {
    super.doInit(select, source, filterGroupWith, compareWith);
    this.copyWith = copyWith;
  }

  protected filter() {
    if (this.source) {
      let search = this.searchCtrl.value;
      if (!search) {
        this.filtered.next(this.source.slice());
      } else {
        search = this.transformWith(search);
        const copy = this.copyWith(this.source);
        this.filtered.next(
          copy.filter(group => this.filterWith(group, search) as boolean)
        );
      }
    }
  }
}
