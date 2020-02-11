import React, { FC } from 'react';

import { AccountDetails } from '../types';
import { AccountType } from '../../../components/AccountTile/types';
import Button from '../../../components/Button';
import { ButtonType } from '../../../components/Button/Button';

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
    <div className={styles.headerContainer}>
      <div>
      <span className={styles.cardType}>{accountLabel[type]}</span>
      <span className={styles.codes}>{sortCode} {accountNumber}</span>
      <div className={styles.total}>${balance}</div>
      <div className={styles.subTotal}>Available: ${available}</div>
      <div className={styles.subTotal}>Spent this month: ${spent}</div>
    </div>
    <div>
      <Button className={styles.largeButton} onClick={() => {}} buttonType={ButtonType.PRIMARY} label="Make Payment" />
    </div>
    </div>
  );
};

export default AccountDetailsHeader;