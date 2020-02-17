import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { AccountType } from '../../components/AccountTile/types';
import { PaymentFormValues } from './PaymentForm/PaymentForm';

import AccountTile from '../../components/AccountTile';
import AccountDetailsHeader from './AccountDetailsHeader';
import ExpenseList from './ExpenseList';
import Modal from '../../components/Modal';
import PaymentForm from './PaymentForm';
import PageTitle from '../../components/PageTitle';
import MAKE_PAYMENT from './mutations/makePayment';
import GET_EXPENSE_ITEMS from './queries/getExpenseItems';
import GET_ACCOUNT_DETAILS from './queries/getAccountDetails';

const styles = require('./styles.module.css');

const Account: FC = () => {
  const [type, setType] = useState<AccountType>(AccountType.DEBIT);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [makePayment] = useMutation(MAKE_PAYMENT, 
    {
      refetchQueries: [{ query: GET_EXPENSE_ITEMS, variables: { type } }, { query: GET_ACCOUNT_DETAILS, variables: { type }}],
      awaitRefetchQueries: true,
      onCompleted: () => closeModal(), 
    })

  const closeModal = () => setIsModalOpen(false);

  const openModal = () => setIsModalOpen(true);

  const onSubmit = (values: PaymentFormValues) => {
    makePayment({ variables: { values, type }});
  }

  return (
    <div className={styles.accountContainer}>
      <PageTitle>Welcome back, Mr. Example!</PageTitle>
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
        <AccountDetailsHeader onMakePaymentClick={openModal} type={type} />
      </div>
      <ExpenseList type={type}/>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PageTitle>Make a payment</PageTitle>
        <PaymentForm onCancel={closeModal} onSubmit={onSubmit} />
      </Modal>
    </div>
  )
}

export default Account;