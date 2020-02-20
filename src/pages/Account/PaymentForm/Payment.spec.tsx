import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { fillForm } from '../Account.spec';

import PaymentForm from './PaymentForm';

const mockCancel = jest.fn();
const mockSubmit = jest.fn();

const subject = () => render(<PaymentForm onCancel={mockCancel} onSubmit={mockSubmit}/>);

describe('PaymentForm', () => {
  it('renders the form', () => {
    const { queryByLabelText, queryByText } = subject();

    expect(queryByLabelText('Payee Name')).not.toBeNull();
    expect(queryByText('Submit')).not.toBeNull();
  });

  it('calls on cancel when button clicked', () => {
    const { queryByText } = subject();
    const cancelButton = queryByText(/cancel/i);

    fireEvent.click(cancelButton);

    expect(mockCancel).toBeCalled();
  });

  it('validates the form', async () => {
    const { queryByText, debug } = subject();
    const submitButton = queryByText('Submit');
    fireEvent.click(submitButton);

    await wait(() => {
      expect(queryByText(/please provide payee name/i)).not.toBeNull();
      expect(queryByText(/please provide account number/i)).not.toBeNull();
      expect(queryByText(/please provide sort code/i)).not.toBeNull();
      expect(queryByText(/amount must be a positive number/i)).not.toBeNull()
    });
  })

  it('calls on submit when form filled up correctly', async () => {
    const { queryByLabelText, queryByText } = subject();

    const submitButton = queryByText('Submit')

    fillForm([
      {
        label: "Payee Name",
        value: "MR EXAMPLE",
      },
      {
        label: "Account Number",
        value: "123456",
      },
      {
        label: "Sort Code",
        value: "12-12-12",
      },
      {
        label: "Reference",
        value: "REF",
      },
      {
        label: "Amount",
        value: 50,
      },
    ], queryByLabelText);

    fireEvent.click(submitButton);

    await wait(() => expect(mockSubmit).toBeCalled());
  });
});