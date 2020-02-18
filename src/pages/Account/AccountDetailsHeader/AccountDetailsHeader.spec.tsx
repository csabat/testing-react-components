import React from 'react';
import { render, act, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { AccountType } from '../../../components/AccountTile/types';
import AccountDetailsHeader from './AccountDetailsHeader';
import GET_ACCOUNT_DETAILS from '../queries/getAccountDetails';
import { isType, GraphQLError } from 'graphql';

const mockPaymentClick = jest.fn();


const subject = (type = AccountType.DEBIT, error = false) => {
  const data = {
    getCardDetails: {
      balance: 1200, 
      spent: 0, 
      available: 0, 
      sortCode: '123-123-123', 
      accountNumber: '1223456', 
      name: type,
    }
  }

  const results = error ? { error: new GraphQLError('Error')} : { data }
  const mocks = [
    {
      request: {
        query: GET_ACCOUNT_DETAILS,
        variables: {
          type,
        },
      },
      result: {
        ...results
      },
    },
  ]
  return render(<MockedProvider addTypename={false} mocks={mocks}><AccountDetailsHeader type={type} onMakePaymentClick={mockPaymentClick} /></MockedProvider>);
};

describe('AccountDetailsHeader', () => {
  it('renders the spinner when loading', () => {
    const { queryByText } = subject();

    expect(queryByText('Loading...')).not.toBeNull();
  });

  it('handles error', async () => {
    const { queryByText } = subject(AccountType.DEBIT, true);
    await wait(() => {
      expect(queryByText(/something went wrong, please refresh the page./i)).not.toBeNull()
    });
  });

  it('fetches and renders the debit details', async () => {
    const { queryByText } = subject();

    await wait(() => {
      expect(queryByText(/debit/i)).not.toBeNull();
      expect(queryByText(/spent this month/i)).not.toBeNull();
      expect(queryByText(/123-123-123/i)).not.toBeNull();
      expect(queryByText(/1223456/i)).not.toBeNull();
    });
  });

  it('fetches and renders the credit details', async () => {
    const { queryByText } = subject(AccountType.CREDIT);

    await wait(() => {
      expect(queryByText(/credit/i)).not.toBeNull();
      expect(queryByText(/spent this month/i)).not.toBeNull();
      expect(queryByText(/available/i)).not.toBeNull();
      expect(queryByText(/1223456/i)).not.toBeNull();
    });
  });
});