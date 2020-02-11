import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import { ButtonType } from '../../../components/Button/Button';

interface PaymentFormValues {
  accountNumber: string;
  sortCode: string;
  payeeName: string;
  reference: string;
  amount: number;
}

const initialValues = {
  accountNumber: '',
  sortCode: '',
  payeeName: '',
  reference: '',
  amount: 0,
}

const styles = require('./styles.module.css');

interface Props {
  onSubmit: (values: PaymentFormValues) => void;
}

const PaymentForm: FC<Props> = ({ onSubmit }) => {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <InputField name="payeeName" />
          <InputField name="accountNumber" />
          <InputField name="sortCode" />
          <InputField name="reference" />
          <InputField name="amount" type="number" />
          <Button label="Submit" buttonType={ButtonType.PRIMARY} type="submit" className={styles.paymentButton} />
        </Form>
      </Formik>
    </div>
  )
}

export default PaymentForm;