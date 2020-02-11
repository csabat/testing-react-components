import React, { FC, ChangeEvent } from 'react';
import FormField from '../FormField/FormField';

const styles = require('./styles.module.css');

interface Props {
  name: string;
  type?: string;
}

const InputField: FC<Props> = ({ name, type = "text" }) => {
  return (
    <div className={styles.container}>
      <FormField name={name}>
        {(field, form) => (
          <input 
            {...field}
            onChange={form.handleChange}
            name={name}
            className={styles.inputField}
            type={type}
          />
        )}
      </FormField>
    </div>
  );
};

export default InputField;
