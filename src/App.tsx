import React from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import Button, { ButtonType } from './components/Button/Button';

const styles = require('./styles.module.css');

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.pictureContainer}>
          <div className={styles.title}>Generous Bank</div>
          <div className={styles.subtitle}>Values we trust.</div>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginTitle}>Login to your personal account</div>
          <InputField name="emailAddress"/>
          <InputField name="password" />
          <Button label="Submit" type={ButtonType.PRIMARY} onClick={() => {}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
