/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';

import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { MatSelectNoEntriesFoundDirective } from './mat-select-no-entries-found.directive';

export const MatSelectSearchVersion = '8.0.1';
export { MatSelectSearchClearDirective };
export { MatSelectNoEntriesFoundDirective };

@NgModule({
  imports: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective,
    MatSelectNoEntriesFoundDirective
  ],
  exports: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective,
    MatSelectNoEntriesFoundDirective
  ]
})
export class NgxMatSelectSearchModule {}
