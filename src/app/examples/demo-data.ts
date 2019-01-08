
export interface Bank {
  id: string;
  name: string;
}

export interface BankGroup {
  name: string;
  banks: Bank[];
}


/** list of banks */
export const BANKS: Bank[] = [
  {name: 'Bank A (Switzerland)', id: 'A'},
  {name: 'Bank B (Switzerland)', id: 'B'},
  {name: 'Bank C (France)', id: 'C'},
  {name: 'Bank D (France)', id: 'D'},
  {name: 'Bank E (France)', id: 'E'},
  {name: 'Bank F (Italy)', id: 'F'},
  {name: 'Bank G (Italy)', id: 'G'},
  {name: 'Bank H (Italy)', id: 'H'},
  {name: 'Bank I (Italy)', id: 'I'},
  {name: 'Bank J (Italy)', id: 'J'},
  {name: 'Bank Kolombia (United States of America)', id: 'K'},
  {name: 'Bank L (Germany)', id: 'L'},
  {name: 'Bank M (Germany)', id: 'M'},
  {name: 'Bank N (Germany)', id: 'N'},
  {name: 'Bank O (Germany)', id: 'O'},
  {name: 'Bank P (Germany)', id: 'P'},
  {name: 'Bank Q (Germany)', id: 'Q'},
  {name: 'Bank R (Germany)', id: 'R'}
];

/** list of bank groups */
export const BANKGROUPS: BankGroup[] = [
  {
    name: 'Switzerland',
    banks: [
      {name: 'Bank A', id: 'A'},
      {name: 'Bank B', id: 'B'}
    ]
  },
  {
    name: 'France',
    banks: [
      {name: 'Bank C', id: 'C'},
      {name: 'Bank D', id: 'D'},
      {name: 'Bank E', id: 'E'},
    ]
  },
  {
    name: 'Italy',
    banks: [
      {name: 'Bank F', id: 'F'},
      {name: 'Bank G', id: 'G'},
      {name: 'Bank H', id: 'H'},
      {name: 'Bank I', id: 'I'},
      {name: 'Bank J', id: 'J'},
    ]
  },
  {
    name: 'United States of America',
    banks: [
      {name: 'Bank Kolombia', id: 'K'},
    ]
  },
  {
    name: 'Germany',
    banks: [
      {name: 'Bank L', id: 'L'},
      {name: 'Bank M', id: 'M'},
      {name: 'Bank N', id: 'N'},
      {name: 'Bank O', id: 'O'},
      {name: 'Bank P', id: 'P'},
      {name: 'Bank Q', id: 'Q'},
      {name: 'Bank R', id: 'R'}
    ]
  }
];
