import React, { FC } from 'react';

import { ExpenseItem } from '../types';
import { useQuery } from '@apollo/react-hooks';
import { AccountType } from '../../../components/AccountTile/types';

import ExpenseListHeader from './ExpenseListHeader';
import ExpenseListItem from './ExpenseListItem';
import Spinner from '../../../components/Spinner';
import GET_EXPENSE_ITEMS from '../queries/getExpenseItems';

const styles = require('./styles.module.css');

interface Props {
  type: AccountType;
}

const ExpenseList: FC<Props> = ({ type }) => {
  const { loading, error, data } = useQuery(GET_EXPENSE_ITEMS, { variables: { type }});
  
  if (loading) {
    return <Spinner />;
  };
  
  if (!!error) {
    return <div>Something went wrong... Please refresh the page.</div>;
  };

  const shouldRenderTransactions = data && data.getExpenseItems && data.getExpenseItems.length !== 0;
  const renderList = (items: ExpenseItem[]) => items.map((item) => <ExpenseListItem item={item} />);

  return (
    <div className={styles.expenseContainer}>
      {shouldRenderTransactions && (
        <>
          <div className={styles.title}>Statement</div>
          <div className={styles.listHeader}>All Transactions</div>
          <ExpenseListHeader />
          {renderList(data.getExpenseItems)}
        </>
      )}
    </div>
  );
};

export default ExpenseList;