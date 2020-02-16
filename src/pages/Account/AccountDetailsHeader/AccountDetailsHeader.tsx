import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { AccountType } from '../../../components/AccountTile/types';
import { ButtonType } from '../../../components/Button/Button';

import GET_ACCOUNT_DETAILS from '../queries/getAccountDetails';
import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';

const styles = require('./styles.module.css');

interface Props {
  type: AccountType;
  onMakePaymentClick: () => void;
};

const accountLabel = {
  [AccountType.DEBIT]: 'CLASSIC',
  [AccountType.CREDIT]: 'GENEROUS BANK NEVERENDING MASTERCARD',
}

const AccountDetailsHeader: FC<Props> = ({ type, onMakePaymentClick }) => {
  const { loading, error, data } = useQuery(GET_ACCOUNT_DETAILS, { variables: { type } });

  const renderAccountDetails = (cardDetails) => {
    const { balance, spent, available, sortCode, accountNumber } = cardDetails;
    const isCredit = type === AccountType.CREDIT;

    return (
      <>
        <div>
          <span className={styles.cardType}>{accountLabel[type]}</span>
          <span className={styles.codes}>
            {sortCode} {accountNumber}
          </span>
          <div className={styles.total}>
            ${balance}
          </div>
          {isCredit && (
            <div className={styles.subTotal}>
              Available: ${available}
            </div>
          )}
          <div className={styles.subTotal}>
            Spent this month: ${spent}
          </div>
        </div>
        <div>
          <Button 
            className={styles.largeButton} 
            onClick={onMakePaymentClick} 
            buttonType={ButtonType.PRIMARY} 
            label="Make Payment" 
          />
        </div>
      </>
    )
  }

  return (
    <div className={styles.headerContainer}>
      {loading && <Spinner />}
      {!!error && <div>Something went wront, please refresh the page.</div>}
      {!!data && data.getCardDetails && renderAccountDetails(data.getCardDetails)}
    </div>
  );
};

export default AccountDetailsHeader;