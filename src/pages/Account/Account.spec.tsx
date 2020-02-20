import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';

import { MockedProvider } from '@apollo/react-testing';
import { AccountType } from '../../components/AccountTile/types';
import { item } from './ExpenseList/expenseListItem.mock';
import { TransactionType } from './types';

import Account from './Account';
import GET_ACCOUNT_DETAILS from './queries/getAccountDetails';
import GET_EXPENSE_ITEMS from './queries/getExpenseItems';
import MAKE_PAYMENT from './mutations/makePayment';

export const fillForm = (configs, query) => {
  configs.forEach(({ label, value }) => {
    const input = query(label);
    fireEvent.change(input, { target: { value } });
  });
};

let mutationCalled = false;

const subject = () =>  {
  const getExpenseItemsMock = {
    request: {
      query: GET_EXPENSE_ITEMS,
      variables: {
        type: AccountType.DEBIT,
      },
    },
    result : {
      data: {
        getExpenseItems: [item, item]
      }
    },
  };

  const getAccountDetailsMock = {
    request: {
      query: GET_ACCOUNT_DETAILS,
      variables: {
        type: AccountType.DEBIT,
      },
    },
    result: {
      data: {
        getCardDetails: {
          balance: 1200, 
          spent: 0, 
          available: 0, 
          sortCode: '12-12-12', 
          accountNumber: '1223456', 
          name: "CLASSIC",
        }
      }
    },
  };

  const makePaymentMutation = {
    request: {
      query: MAKE_PAYMENT,
      variables: { 
        values: {
          accountNumber: '123456',
          sortCode: '12-12-12',
          payeeName: 'MR EXAMPLE',
          reference: 'REF',
          amount: 50,
          transactionType: TransactionType.ONLINE,
        }, 
        type: AccountType.DEBIT, 
      },
    },
    result: () => {
      mutationCalled = true

      return ({
        data: {
          makePayment: true,
        },
      });
    }
  };

  const mocks = [ getExpenseItemsMock, getExpenseItemsMock, getAccountDetailsMock, getAccountDetailsMock, makePaymentMutation ];

  const renderResults = render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <Account />
    </MockedProvider>)

  return { mutationCalled, ...renderResults };
}

describe('Account', () => {
  it('renders the page', async () => {
    const { queryByText, queryAllByTestId } = subject();

    await wait(() => {
      expect(queryByText(/classic/i))
      expect(queryByText(/make payment/i)).not.toBeNull()
      expect(queryAllByTestId(/row/i)).not.toBeNull()
      expect(queryByText(/all transactions/i)).not.toBeNull()
    });
  });

  it('opens the modal', async () => {
    const { debug, queryByText, queryByLabelText } = subject();

    await wait(() => {
      const makePaymentButton = queryByText(/make payment/i);

      fireEvent.click(makePaymentButton);
      
      expect(queryByText(/make a payment/i)).not.toBeNull();
    });
  });

  it('closes the modal', async () => {
    const { queryByText } = subject();

    await wait(() => {
      const makePaymentButton = queryByText(/make payment/i);

      fireEvent.click(makePaymentButton);

      const cancelButton = queryByText('Cancel');
      
      fireEvent.click(cancelButton);
    });

    await wait(() => {
      expect(queryByText(/make a payment/i)).toBeNull();
    });
  });

  it('it makes the payment', async () => {
    const { queryByText, queryByLabelText } = subject();

    await wait(() => {
      const makePaymentButton = queryByText(/make payment/i);

      fireEvent.click(makePaymentButton);

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

      const submitButton = queryByText('Submit');

      fireEvent.click(submitButton);
    });

    await wait(() => {
      expect(mutationCalled).toBeTruthy()
    });
  });
});