import { Directive } from '@angular/core';

/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
@Directive({
    selector: '[ngxMatSelectSearchClear]'
})
export class MatSelectSearchClearDirective {}
