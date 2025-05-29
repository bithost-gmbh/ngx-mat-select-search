import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';
import { Bank, BANKS } from '../demo-data';

@Component({
  selector: 'app-multiple-selection-select-all-example',
  templateUrl: './multiple-selection-select-all-example.component.html',
  styleUrl: './multiple-selection-select-all-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent]
})
export class MultipleSelectionSelectAllExampleComponent {

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

  $selectedBanks = toSignal<Bank[]>(this.bankMultiCtrl.valueChanges.pipe(startWith(this.bankMultiCtrl.value)));

  $isIndeterminate = computed(() => {
    const selectedBanks = this.$selectedBanks();
    if (!selectedBanks) return false;
    return selectedBanks.length > 0 && selectedBanks.length < this.banks.length;
  });
  $isChecked = computed(() => {
    const selectedBanks = this.$selectedBanks();
    if (!selectedBanks) return false;
    return selectedBanks.length === this.banks.length;
  });

  toggleSelectAll(selectAllValue: boolean) {
    if(selectAllValue) {
      this.bankMultiCtrl.patchValue([...this.$filteredBanks()]);
    } else {
      this.bankMultiCtrl.patchValue([]);
    }
  }
}
