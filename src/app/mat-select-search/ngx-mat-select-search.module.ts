/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { CommonModule } from '@angular/common';

import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectNoEntriesFoundDirective } from './mat-select-no-entries-found.directive';

export const MatSelectSearchVersion = '6.0.0';
export { MatSelectSearchClearDirective };
export { MatSelectNoEntriesFoundDirective };

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  declarations: [
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
export class NgxMatSelectSearchModule {
}
