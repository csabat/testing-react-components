import { TransactionType, ExpenseItemDetails, ExpenseItem } from '../types';
import { AccountType } from '../../../components/AccountTile/types';

export const details: ExpenseItemDetails = {
  amount: 1000, 
  transactionType: TransactionType.ONLINE, 
  payeeName: 'JOHN SMITH', 
  reference: 'GOODWILL', 
  accountNumber: '45678012', 
  sortCode: '12-12-12'
};

export const item: ExpenseItem = {
  date: '2019-12-12',
  description: 'GOODWILL',
  details,
  type: AccountType.DEBIT, 
  incoming: 0, 
  outgoing: 1000, 
  balance: 500,
};