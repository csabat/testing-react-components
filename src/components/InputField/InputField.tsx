import React, { FC } from 'react';
import FormField from '../FormField/FormField';

const styles = require('./styles.module.css');

interface Props {
  name: string;
  type?: string;
}

const InputField: FC<Props> = ({ name, type = "text", ...rest }) => {
  return (
    <div className={styles.container}>
      <FormField name={name}>
        {(field, form) => (
          <input 
            {...field}
            {...rest}
            onChange={form.handleChange}
            name={name}
            className={styles.inputField}
            type={type}
            error={''}
          />
        )}
      </FormField>
    </div>
  );
};

export default InputField;
