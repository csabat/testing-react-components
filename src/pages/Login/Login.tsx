import React, { FC } from 'react';

import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const styles = require('./styles.module.css');

const Login: FC = () => {
  const { push } = useHistory();
  const onSubmit = (values) => push('/account');

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