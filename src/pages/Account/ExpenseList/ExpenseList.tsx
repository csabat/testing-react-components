import React from 'react';
import ExpenseListHeader from './ExpenseListHeader';

const styles = require('./styles.module.css');

const ExpenseList = () => {
  return (
    <div className={styles.expenseContainer}>
      <div className={styles.title}>Statement</div>
      <div className={styles.listHeader}>All Transactions</div>
      <ExpenseListHeader />
    </div>
  )
};

export default ExpenseList;