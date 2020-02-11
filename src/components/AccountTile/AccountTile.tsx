import React, { FC } from 'react';

import { AccountType } from './types';

const styles = require('./styles.module.css');

interface Props {
  accountType: AccountType;
  isActive: boolean;
  onClick: () => void;
}

const AccountTile: FC<Props> = ({ accountType, isActive, onClick }) => {

  const tileClassNames = isActive ? styles.accountType : `${styles.accountType} ${styles.inactive}` ;
  return (
    <div onClick={onClick} className={styles.accountTile}>
      <div className={tileClassNames}>{accountType}</div>
    </div>  
  );
};

export default AccountTile;