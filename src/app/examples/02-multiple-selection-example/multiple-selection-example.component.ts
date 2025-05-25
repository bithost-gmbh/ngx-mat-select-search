import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';

import { Bank, BANKS } from '../demo-data';

@Component({
  selector: 'app-multiple-selection-example',
  templateUrl: './multiple-selection-example.component.html',
  styleUrl: './multiple-selection-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent]
})
export class MultipleSelectionExampleComponent {

  /** List of banks */
  protected banks: Bank[] = BANKS;

  /** Control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl<Bank[]> = new FormControl<Bank[]>([this.banks[10], this.banks[11], this.banks[12]], {nonNullable: true});

  /** Control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  /** List of banks filtered by search keyword */
  public $filteredBanks = computed(() => {
    const search = (this.$bankControlsChanges() || '').toLowerCase();
    if (!search) return [...this.banks];
    return this.banks.filter(bank => bank.name.toLowerCase().includes(search));
  });
  $bankControlsChanges = toSignal<string>(this.bankMultiFilterCtrl.valueChanges.pipe(startWith('')));
}
