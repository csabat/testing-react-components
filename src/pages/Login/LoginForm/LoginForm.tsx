import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ButtonType } from '../../../components/Button/Button';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

interface LoginValues {
  emailAddress: string;
  password: string;
}

const initialValues = {
  emailAddress: '',
  password: '',
}

const styles = require('./styles.module.css');

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string().required('Please provide your email address.'),
  password: Yup.string().required('Password is required.')
});

interface Props {
  onSubmit: (values: LoginValues) => void;
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
  return (
    <Formik<LoginValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <InputField data-testid="emailField" type="email" name="emailAddress"/>
          <InputField data-testid="passwordField" type="password" name="password" />
          <Button className={styles.loginButton} label="Submit" type="submit" buttonType={ButtonType.PRIMARY} />
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm;


//refactor initalvalues and name to present flexibility in test.