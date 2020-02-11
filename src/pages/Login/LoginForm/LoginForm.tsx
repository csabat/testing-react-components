import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import { ButtonType } from '../../../components/Button/Button';
import * as Yup from 'yup';

interface Props {
  onSubmit: (values: LoginValues) => void;
}

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

const LoginForm: FC<Props> = ({ onSubmit }) => {
  return (
    <Formik<LoginValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <InputField type="email" name="emailAddress"/>
          <InputField type="password" name="password" />
          <Button className={styles.loginButton} label="Submit" type="submit" buttonType={ButtonType.PRIMARY} />
        </Form>
      )}

    </Formik>
  )
}

export default LoginForm;