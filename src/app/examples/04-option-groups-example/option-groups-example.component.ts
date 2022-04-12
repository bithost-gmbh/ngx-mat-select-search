import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BankGroup, BANKGROUPS } from '../demo-data';
import { MatSelect } from '@angular/material/select';
import { MatSelectSearchGroupData } from '../../mat-select-search/mat-select-search-group-data';


@Component({
  selector: 'app-option-groups-example',
  templateUrl: './option-groups-example.component.html',
  styleUrls: ['./option-groups-example.component.scss']
})
export class OptionGroupsExampleComponent implements OnInit, OnDestroy {

  protected bankGroups = new MatSelectSearchGroupData<BankGroup>();

  @ViewChild('singleSelect', { static: true }) select: MatSelect;

  constructor() { }

  ngOnInit() {
    this.bankGroups.initGroups(this.select, BANKGROUPS, (bankGroup: BankGroup, search: string) => {
      const showBankGroup = this.bankGroups.transformWith(bankGroup.name).indexOf(search) > -1;
      if (!showBankGroup) {
        bankGroup.banks = bankGroup.banks.filter(bank => this.bankGroups.transformWith(bank.name).indexOf(search) > -1);
      }
      return bankGroup.banks.length > 0;
    }, (a: BankGroup, b: BankGroup) => a && b && a.name === b.name, (bankGroups: BankGroup[]) => {
      const bankGroupsCopy = [];
      bankGroups.forEach(bankGroup => {
        bankGroupsCopy.push({
          name: bankGroup.name,
          banks: bankGroup.banks.slice()
        });
      });
      return bankGroupsCopy;
    });
  }

  ngOnDestroy() {
    this.bankGroups.destroy();
  }

}
