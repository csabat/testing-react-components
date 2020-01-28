import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Button, { ButtonType } from '../../components/Button/Button';
import InputField from '../../components/InputField';

const styles = require('./styles.module.css');

const Login: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.pictureContainer}>
        <div className={styles.title}>Generous Bank</div>
        <div className={styles.subtitle}>Values we trust.</div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>Login to your personal account</div>
        <InputField name="emailAddress"/>
        <InputField name="password" />
        <Link to={'/account'}><Button label="Submit" type={ButtonType.PRIMARY} onClick={() => {}}/></Link>
      </div>
    </div>
  );
};

export default Login;