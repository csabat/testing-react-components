import React, { FC } from 'react';

import { ExpenseItemDetails } from '../../../types';

const styles = require('./styles.module.css');

interface Props {
  details: ExpenseItemDetails
}

const ExpenseDetails: FC<Props> = ({ details }) => {
  const { amount, transactionType, payeeName, reference, accountNumber, sortCode } = details;

  const detailsHeader = `The payment of $${amount} was taken from your account.`;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>{detailsHeader}</div>
      <div className={styles.detailsContent}>
        <div>
          <div className={styles.description}>Transaction Type: </div>
          <div>{transactionType}</div>
          <div className={styles.description}>Payee Name: </div>
          <div>{payeeName}</div>
          <div className={styles.description}>Account Number: </div>
          <div>{accountNumber}</div>
        </div>
        <div>
          <div className={styles.description}>Reference: </div>
          <div>{reference}</div>
          <div className={styles.description}>Sort Code: </div>
          <div>{sortCode}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
