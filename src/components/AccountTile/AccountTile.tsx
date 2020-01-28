import React, { FC } from 'react';

import { AccountType } from './types';

const styles = require('./styles.module.css');

interface Props {
  accountType: AccountType;
  isActive: boolean;
}

const AccountTile: FC<Props> = ({ accountType, isActive }) => {

  const tileClassNames = isActive ? styles.accountType : `${styles.accountType} ${styles.inactive}` ;
  return (
    <div className={styles.accountTile}>
      <div className={tileClassNames}>{accountType}</div>
    </div>  
  );
};

export default AccountTile;