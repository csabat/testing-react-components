export interface AccountDetails {
  balance: number;
  available: number;
  spent: number;
  accountNumber: string;
  sortCode: string;
}

export enum TransactionType {
  ONLINE = "ONLINE TRANSACTION"
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
  details: ExpenseItemDetails;
}

export interface ExpenseItemDetails {
  payeeName: string;
  accountNumber: string;
  sortCode: string;
  reference: string;
  amount: number;
  transactionType: TransactionType;
}