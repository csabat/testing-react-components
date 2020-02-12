import React, { FC, useState } from 'react';
import moment from 'moment';

import { ExpenseItem, TransactionType, ExpenseType } from '../../types';
import { dateFormat } from '../../../../utils/utils';

import ExpenseDetails from './ExpenseDetails';

const styles = require('./styles.module.css');

interface Props {
  item: ExpenseItem;
}

const ExpenseListItem: FC<Props> = ({ item: { date, description, type, incoming, outgoing, balance } }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleRow = () => setExpanded(!expanded);

  return (
    <>
      <div className={styles.expenseItem} onClick={toggleRow}>
        <div>{moment(date).format(dateFormat)}</div>
        <div className={styles.description}>{description.toUpperCase()}</div>
        <div>{type}</div>
        <div>{incoming}</div>
        <div>{outgoing}</div>
        <div>{balance}</div>
      </div>
      {expanded && (
        <ExpenseDetails
          transactionType={TransactionType.IN}
          id={'32341'}
          description={'WIZZ AIR HBLSK'}
          type={ExpenseType.BNS}
          amount={4321}
        />
      )}
    </> 
  );
};

export default ExpenseListItem;