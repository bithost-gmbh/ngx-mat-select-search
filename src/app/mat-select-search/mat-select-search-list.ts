import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

export class MatSelectSearchList <T>{

  protected source: T[] ;

  public filtered: ReplaySubject<T[]> = new ReplaySubject<T[]>(1);

  public sourceCtrl: FormControl = new FormControl();

  public filterCtrl: FormControl = new FormControl();

  protected destroySubject = new Subject<void>();

  protected filterWith: (o: T) => string;

  setSource( source: T[]){
    this.source = source;
    this.filtered.next(this.source.slice());
  }

  init(select: MatSelect, source: T[], filterWith: (o: T) => string, sortWith: (o1: T, o2: T) => boolean){
   this.setSource(source);
   this.filterWith = filterWith;
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.filter();
      });
    this.filtered
      .pipe(take(1), takeUntil(this.destroySubject))
      .subscribe(() => {
        select.compareWith = sortWith;
      });
  }

  destroy(){
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  private filter() {
    if (this.source) {
      let search = this.filterCtrl.value;
      if (!search) {
        this.filtered.next(this.source.slice());
      } else {
        search = search.toLowerCase();
        this.filtered.next(
          this.source.filter(option => this.filterWith(option).toLowerCase().indexOf(search) > -1)
        );
      }
    }
  }
}
