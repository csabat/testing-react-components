import React, { FC } from 'react';

const styles = require('./styles.module.css');

const PageTitle: FC = ({ children }) => {
  return (
    <h1 className={styles.pageTitle}>
      {children}
    </h1>
  );
};

export default PageTitle;