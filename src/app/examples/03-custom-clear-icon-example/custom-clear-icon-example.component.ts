import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

import { SingleSelectionExampleComponent } from '../01-single-selection-example/single-selection-example.component';
import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';
import { MatSelectSearchClearDirective } from '../../mat-select-search/mat-select-search-clear.directive';


@Component({
  selector: 'app-custom-clear-icon-example',
  templateUrl: './custom-clear-icon-example.component.html',
  styleUrl: './custom-clear-icon-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent, MatIcon, MatSelectSearchClearDirective]
})
export class CustomClearIconExampleComponent extends SingleSelectionExampleComponent {}
