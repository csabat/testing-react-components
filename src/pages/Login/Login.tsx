import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';
import auth from '../../utils/auth';

const styles = require('./styles.module.css');

const Login: FC = () => {
  const { push } = useHistory();
  const { setAccountUuid } = auth();
  const onSubmit = () => {
    setAccountUuid('12345');
    push('/account');
  };

  return (
    <div className={styles.main}>
      <div className={styles.pictureContainer}>
        <div className={styles.title}>Generous Bank</div>
        <div className={styles.subtitle}>Values we trust.</div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>Login to your personal account</div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;