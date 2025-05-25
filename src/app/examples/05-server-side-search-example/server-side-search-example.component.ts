import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, tap, map, startWith } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchComponent } from '../../mat-select-search/mat-select-search.component';


@Component({
  selector: 'app-server-side-search-example',
  templateUrl: './server-side-search-example.component.html',
  styleUrl: './server-side-search-example.component.scss',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSelectSearchComponent]
})
export class ServerSideSearchExampleComponent {

  /** List of banks */
  protected banks: Bank[] = BANKS;

  /** Control for the selected bank for server side filtering */
  public bankServerSideCtrl: FormControl<Bank | null> = new FormControl<Bank | null>(null);

  /** Control for filter for server side. */
  public bankServerSideFilteringCtrl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  bankControlsChanges$ = this.bankServerSideFilteringCtrl.valueChanges.pipe(
    startWith(''),
    tap(() => this.searching.set(true)),
    debounceTime(200));
  filteredBanks$ = this.bankControlsChanges$.pipe(
    map(search => {
      if (!this.banks) {
        return [];
      }

      // simulate server fetching and filtering data
      return this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
    }),
    delay(500),
    tap(() => this.searching.set(false)));

  /** Indicate search operation is in progress */
  public searching = signal(false);

  /** List of banks filtered after simulating server side search */
  public  $filteredServerSideBanks = toSignal<Bank[]>(this.filteredBanks$);
}
