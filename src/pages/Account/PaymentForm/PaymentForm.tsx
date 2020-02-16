import React, { FC } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { ButtonType } from '../../../components/Button/Button';
import { TransactionType } from '../types';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

const validationSchema = Yup.object().shape({
  accountNumber: Yup.string().required('Please provide account number'),
  sortCode: Yup.string().required('Please provide sort code'),
  payeeName: Yup.string().required('Please provide payee name '),
  reference: Yup.string(),
  amount: Yup.number().positive().required('Please specify amount')
})

export interface PaymentFormValues {
  accountNumber: string;
  sortCode: string;
  payeeName: string;
  reference: string;
  amount: number;
  transactionType: TransactionType
}

const initialValues = {
  accountNumber: '',
  sortCode: '',
  payeeName: '',
  reference: '',
  amount: 0,
  transactionType: TransactionType.ONLINE
}

const styles = require('./styles.module.css');

interface Props {
  onSubmit: (values: PaymentFormValues) => void;
  onCancel: () => void;
}

const PaymentForm: FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
        <Form>
          <div className={styles.formRow}> 
            <InputField name="payeeName" />
            <InputField name="accountNumber" />

          </div>
          <div className={styles.formRow}>
            <InputField name="sortCode" />
            <InputField name="reference" />
          </div>
          <InputField name="amount" type="number" />
          <div className={styles.formRow}>
            <Button 
              label="Cancel" 
              buttonType={ButtonType.SECONDARY} 
              className={styles.paymentFormButton} 
              onClick={onCancel} 
            />
            <Button 
              label="Submit" 
              buttonType={ButtonType.PRIMARY} 
              type="submit" 
              className={styles.paymentFormButton} 
            />
          </div>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default PaymentForm;