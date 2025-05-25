import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';
import { Bank, BankGroup, BANKGROUPS } from '../demo-data';


@Component({
  selector: 'app-option-groups-example',
  templateUrl: './option-groups-example.component.html',
  styleUrl: './option-groups-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent]
})
export class OptionGroupsExampleComponent {

  /** List of bank groups */
  protected bankGroups: BankGroup[] = this.copyBankGroups(BANKGROUPS);

  /** Control for the selected bank for option groups */
  public bankGroupsCtrl: FormControl<Bank | null> = new FormControl<Bank | null>(null);

  /** Control for the MatSelect filter keyword for option groups */
  public bankGroupsFilterCtrl: FormControl<string> = new FormControl<string>('', {nonNullable: true});


  public $filteredBankGroups = computed(() => {
    const search = (this.$bankControlsChanges() || '').toLowerCase();
    if (!search) return this.bankGroups;
    return this.copyBankGroups(BANKGROUPS).filter(bankGroup => {
      if(bankGroup.name.toLowerCase().includes(search)) return true;
      bankGroup.banks = bankGroup.banks.filter(bank => bank.name.toLowerCase().includes(search));
      return bankGroup.banks.length > 0; 
    });
  });
  $bankControlsChanges = toSignal<string>(this.bankGroupsFilterCtrl.valueChanges.pipe(startWith('')));

  protected copyBankGroups(bankGroups: BankGroup[]) {
    const bankGroupsCopy: BankGroup[] = [];
    bankGroups.forEach(bankGroup => {
      bankGroupsCopy.push({
        name: bankGroup.name,
        banks: bankGroup.banks.slice()
      });
    });
    return bankGroupsCopy;
  }
}
