import { Directive } from '@angular/core';

/**
 * Directive for providing a custom no entries found element.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <span ngxMatSelectNoEntriesFound>
 *     No entries found <button>Add</button>
 *   </span>
 * </ngx-mat-select-search>
 */
@Directive({
  selector: '[ngxMatSelectNoEntriesFound]'
})
export class MatSelectNoEntriesFoundDirective {}
