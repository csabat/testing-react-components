export interface AccountDetails {
  balance: number;
  available: number;
  spent: number;
  accountNumber: string;
  sortCode: string;
}

export enum TransactionType {
  IN,
  OUT,
}

export enum ExpenseType {
  BNS = "Bonus",
  BP = "Bill Payment",
  CHG = "Charge",
  CSH = "Cash",
  DD = "Direct Debit",
  DEB = "Debit Card",
  DEP = "Deposit",
}

export interface ExpenseItem {
  date: string;
  description: string;
  type: ExpenseType;
  incoming?: number;
  outgoing?: number;
  balance: number;
}

export interface ExpenseItemDetails {
  type: ExpenseType
  name: string;
  businessType: string;
  businessLocation: string;
  cardNumber: string;
  date: string;
}