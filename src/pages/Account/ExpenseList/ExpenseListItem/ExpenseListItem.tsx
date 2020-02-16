import React, { FC, useState } from 'react';
import moment from 'moment';

import { ExpenseItem } from '../../types';
import { dateFormat } from '../../../../utils/utils';

import ExpenseDetails from './ExpenseDetails';

const styles = require('./styles.module.css');

interface Props {
  item: ExpenseItem;
}

const ExpenseListItem: FC<Props> = ({ item: { date, description, type, incoming, outgoing, balance, details } }) => {
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
          details={details}
        />
      )}
    </> 
  );
};

export default ExpenseListItem;