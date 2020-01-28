import React, { FC } from 'react';

import { AccountDetails } from '../types';
import { AccountType } from '../../../components/AccountTile/types';

const styles = require('./styles.module.css');

interface Props {
  details: AccountDetails;
  type: AccountType;
};

const accountLabel = {
  [AccountType.DEBIT]: 'CLASSIC',
  [AccountType.CREDIT]: 'GENEROUS BANK NEVERENDING MASTERCARD',
}

const AccountDetailsHeader: FC<Props> = ({ details, type }) => {
  const { balance, spent, available, sortCode, accountNumber } = details;

  return (
    <div className={styles.account}>
      <span className={styles.cardType}>{accountLabel[type]}</span>
      <span className={styles.codes}>{sortCode} {accountNumber}</span>
      <div className={styles.total}>${balance}</div>
      <div className={styles.subTotal}>Available: ${available}</div>
      <div className={styles.subTotal}>Spent this month: ${spent}</div>
    </div>
  );
};

export default AccountDetailsHeader;