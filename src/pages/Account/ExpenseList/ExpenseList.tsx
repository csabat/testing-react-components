import React from 'react';

import { ExpenseType } from '../types';
import { useQuery } from '@apollo/react-hooks';

import ExpenseListHeader from './ExpenseListHeader';
import ExpenseListItem from './ExpenseListItem';
import Spinner from '../../../components/Spinner';
import GET_EXPENSE_ITEMS from '../queries/getExpenseItems';

const styles = require('./styles.module.css');

const ExpenseList = () => {
  const { loading, error, data } = useQuery(GET_EXPENSE_ITEMS, { variables: { type: "DEBIT" }});
  
  if (loading) {
    return <Spinner />
  }
  
  if (!!error) {
    return <div>Something went wrong... Please refresh the page.</div>
  }

  console.log(data);

  return (
    <div className={styles.expenseContainer}>
      <div className={styles.title}>Statement</div>
      <div className={styles.listHeader}>All Transactions</div>
      <ExpenseListHeader />
      <ExpenseListItem item={{ date: "2020-02-02", description: 'WIN BANK TRANSFER', type: ExpenseType.BNS, incoming: 0, outgoing: 260.44, balance: 2015.32 }} />
    </div>
  )
};

export default ExpenseList;