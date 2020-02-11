import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import { isString, get, startCase } from 'lodash';

const styles = require('./styles.module.css');

export interface Props {
  className?: string;
  name: string;
  label?: string | React.ReactNode;
  labelDescription?: string;
  isRequired?: boolean;
  placeholder?: string;
  children: any;
}

const FormField: FC<Props> = (props) => {
  const {
    children,
    className = '',
    name,
    label = null,
    labelDescription = null,
    isRequired,
    ...rest
  } = props;

  const renderLabel = (): React.ReactNode => {
    if (label && !isString(label)) {
      return label;
    }

    return (
      <p className={styles.label}>{startCase(name)}</p>
    );
  };

  return (
    <Field
      id={name}
      label={label}
      name={name}
      render={({ field, form }) => {
        const fieldName = field.name;
        const hasError = get(form.touched, fieldName) && !!get(form.errors, fieldName);
        const newProps = { ...field, label, error: hasError, ...rest };
  
        return (
          <div className={className}>
            {renderLabel()}
            {children(newProps, form)}
            {<ErrorMessage className={styles.errorMessage} component="div" name={name} />}
          </div>
        );
      }} 
    />
  );
};

export default FormField;
