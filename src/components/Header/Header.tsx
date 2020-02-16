import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from './logo.svg';

import auth from '../../utils/auth';

const styles = require('./styles.module.css');

const Header: FC = () => {
  const { getAccountUuid, setAccountUuid } = auth();
  const { push } = useHistory();
  
  const shouldDisplayOptions = !!getAccountUuid();
  
  const onPrivacyHandler = () => push('/privacy');
  
  const handleLogoClick = () => push('/account');

  const logout = () => {
    setAccountUuid("");
    push('./login');
  }

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={handleLogoClick} className={styles.bankLogo}>
          <Logo /><span className={styles.bank}>Generous Bank</span>
        </div>
        <div className={styles.links}>
          {shouldDisplayOptions && (
            <>
              <span onClick={onPrivacyHandler}>Privacy</span>
              <span onClick={logout}>Logout</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
};

export default Header;