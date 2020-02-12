import React, { FC } from 'react';

import { AccountDetails } from '../types';
import { AccountType } from '../../../components/AccountTile/types';
import { ButtonType } from '../../../components/Button/Button';

import Button from '../../../components/Button';

const styles = require('./styles.module.css');

interface Props {
  details: AccountDetails;
  type: AccountType;
  onMakePaymentClick: () => void;
};

const accountLabel = {
  [AccountType.DEBIT]: 'CLASSIC',
  [AccountType.CREDIT]: 'GENEROUS BANK NEVERENDING MASTERCARD',
}

const AccountDetailsHeader: FC<Props> = ({ details, type, onMakePaymentClick }) => {
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
      <Button className={styles.largeButton} onClick={onMakePaymentClick} buttonType={ButtonType.PRIMARY} label="Make Payment" />
    </div>
    </div>
  );
};

export default AccountDetailsHeader;