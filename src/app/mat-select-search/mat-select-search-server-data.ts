import { MatSelect } from '@angular/material/select';
import { MatSelectSearchData } from './mat-select-search-data';

export class MatSelectSearchServerData<T> extends MatSelectSearchData<T> {

  /** Indicate search operation is in progress */
  public searching = false;

  private caller: (search: string) => Promise<T[]>;
  private catcher: (reason) => void;

  /**
   * Initialize.
   * Don't forget to destroy
   * @param select MatSelect binded componant
   * @param source data to search in
   * @param caller function that do the server call for search
   * @param catcher error management
   * @param compareWith do the equality comparison. usually using ids
   */
  public initSearch(select: MatSelect, source: T[],
                    caller: (search: string) => Promise<T[]>, catcher: (reason) => void, compareWith?: (o1: T, o2: T) => boolean) {
    this.debounceTime = 200;
    this.caller = caller;
    this.catcher = catcher;
    super.doInit(select, source, null, compareWith);
  }

  /**
   * do not use.
   * Use initSearch method instead
   */
  init(select: MatSelect, source: T[], filterWith: (item: T) => string, compareWith?: (o1: T, o2: T) => boolean) {
    throw new Error('use initSearch');
  }

  protected doFilter(search: string) {
    this.searching = true;
      this.caller(search).then((value: T[]) => {
        this.filtered.next(value);
        this.searching = false;
      }).catch((reason) => {
        this.searching = false;
        this.catcher(reason);
      }) // .finally
      ;
  }
}
