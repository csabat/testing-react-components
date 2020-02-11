import React from 'react';

const styles = require('./styles.module.css');

const ExpenseListHeader = () => {
  return (
    <div className={styles.detailsHeader}>
      <div>DATE</div>
      <div className={styles.description}>DESCRIPTION</div>
      <div>TYPE</div>
      <div>IN ($)</div>
      <div>OUT ($)</div>
      <div>BALANCE ($)</div>
    </div>
  );
};

export default ExpenseListHeader;