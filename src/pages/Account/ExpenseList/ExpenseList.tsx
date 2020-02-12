import React from 'react';

import { ExpenseType } from '../types';

import ExpenseListHeader from './ExpenseListHeader';
import ExpenseListItem from './ExpenseListItem';

const styles = require('./styles.module.css');

const ExpenseList = () => {
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