import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';
import { MatSelectNoEntriesFoundDirective } from '../../mat-select-search/mat-select-no-entries-found.directive';

@Component({
  selector: 'app-custom-no-entries-found-example',
  templateUrl: './custom-no-entries-found-example.component.html',
  styleUrl: './custom-no-entries-found-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent, MatIcon, MatSelectNoEntriesFoundDirective, MatButtonModule]
})
export class CustomNoEntriesFoundExampleComponent {

  /** List of banks */
  protected banks: Bank[] = BANKS;

  /** Control for the selected bank */
  public bankCtrl: FormControl<Bank | null> = new FormControl<Bank | null>(this.banks[10]);

  /** Control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  /** List of banks filtered by search keyword */
  public $filteredBanks = computed(() => {
    const search = (this.$bankControlsChanges() || '').toLowerCase();
    if (!search) return [...this.banks];
    return this.banks.filter(bank => bank.name.toLowerCase().includes(search));
  });
  $bankControlsChanges = toSignal<string>(this.bankFilterCtrl.valueChanges.pipe(startWith('')));
}
