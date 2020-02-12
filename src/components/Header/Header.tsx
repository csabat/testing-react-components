import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from './logo.svg';

import useAuth from '../../utils/useAuth';

const styles = require('./styles.module.css');

const Header: FC = () => {
  const { getAccountUuid, setAccountUuid } = useAuth();
  const { push } = useHistory();
  
  const logout = async () => {
    await setAccountUuid("");
    push('./login');
  }

  const shouldDisplayOptions = !!getAccountUuid();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bankLogo}>
          <Logo /><span className={styles.bank}>Generous Bank</span>
        </div>
        <div className={styles.links}>
          {shouldDisplayOptions && (
            <>
              <span>Privacy</span>
              <span onClick={logout}>Logout</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
};

export default Header;