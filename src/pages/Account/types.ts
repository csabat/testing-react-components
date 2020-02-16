import { AccountType } from "../../components/AccountTile/types";

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

export interface ExpenseItem {
  date: string;
  description: string;
  type: AccountType;
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