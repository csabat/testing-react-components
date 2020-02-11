import React, { FC } from 'react';
import { TransactionType, ExpenseType } from '../../../types';
import { dateFormat } from '../../../../../utils/utils';
import moment from 'moment';

const styles = require('./styles.module.css');

interface Props {
  transactionType: TransactionType;
  id: string;
  description: string;
  type: ExpenseType;
  amount: number;
}

const ExpenseDetails: FC<Props> = ({ transactionType, amount, description, type }) => {
  const expense = {
    name: 'WIZZAIR Hungary',
    businessType: 'AIR Carriers, Airlines not elsewhere classified',
    businessLocation: 'WWW',
    cardNumber: '5540',
    date: '2020-03-03'
  }
  const detailsHeader = {
    [TransactionType.IN]: `The payment of ${amount} was paid into your account.`,
    [TransactionType.OUT]: `The payment of ${amount} to ${description} was taken from your account.`,
  }
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>{detailsHeader[transactionType]}</div>
      <div className={styles.detailsContent}>
        <div>
          <div className={styles.description}>Transation Type: </div>
          <div>{type}</div>
          <div className={styles.description}>Business Type: </div>
          <div>{expense.businessType}</div>
          <div className={styles.description}>Card Number: </div>
          <div>{expense.cardNumber}</div>
        </div>
        <div>
          <div className={styles.description}>Retailer Name: </div>
          <div>{expense.name}</div>
          <div className={styles.description}>Retailer Location: </div>
          <div>{expense.businessLocation}</div>
          <div className={styles.description}>Date: </div>
          <div>{moment(expense.date).format(dateFormat)}</div>
        </div>

      </div>
    </div>
  )
}

export default ExpenseDetails;
