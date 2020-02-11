import React, { FC, useState } from 'react';
import AccountTile from '../../components/AccountTile';
import { AccountType } from '../../components/AccountTile/types';
import AccountDetailsHeader from './AccountDetailsHeader';
import ExpenseList from './ExpenseList';
import Modal from '../../components/Modal';
import PaymentForm from './PaymentForm';

const styles = require('./styles.module.css');

const Account: FC = () => {
  const [type, setType] = useState<AccountType>(AccountType.DEBIT);

  const details = { 
    balance: 12489, 
    spent: 4098, 
    available: 3999,
    sortCode: '54-32-12',
    accountNumber: '3877282761',
  }
  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.welcome}>Welcome back, Mr. Example!</h2>
      <div className={styles.accounts}>
        <div className={styles.account}>
          <AccountTile 
            accountType={AccountType.DEBIT}
            isActive={AccountType.DEBIT === type}
            onClick={() => setType(AccountType.DEBIT)}
          />
        </div>
        <div className={styles.account}>
          <AccountTile 
            accountType={AccountType.CREDIT}
            isActive={AccountType.CREDIT === type}
            onClick={() => setType(AccountType.CREDIT)}
          />
        </div>
      </div>
      <div className={styles.header}>
        <AccountDetailsHeader details={details} type={type} />
      </div>
      <ExpenseList />
      <Modal>
        <PaymentForm onSubmit={(values) => console.log(values)} />
      </Modal>
    </div>
  )
}

export default Account;