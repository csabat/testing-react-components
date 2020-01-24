import React, { FC } from 'react';
import { startCase } from 'lodash';

const styles = require('./styles.module.css');

interface Props {
  name: string;
}

const InputField: FC<Props> = ({ name }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{startCase(name)}</p>
      <input 
        name={name}
        className={styles.inputField}
      />
    </div>
  );
};

export default InputField;
