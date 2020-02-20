import React from 'react';
import { render, wait } from '@testing-library/react';

import { AccountType } from '../../../components/AccountTile/types';
import { item } from './expenseListItem.mock';
import { GraphQLError } from 'graphql';
import { MockedProvider } from '@apollo/react-testing';

import ExpenseList from './ExpenseList';
import GET_EXPENSE_ITEMS from '../queries/getExpenseItems';

const subject = (error = false, emptyResults = false) => {
  const items = emptyResults ? [] : [ item, item ];
  const data = {
    getExpenseItems: items
  };

  const results = error ? { error: new GraphQLError('Error')} : { data };

  const mocks = [
    {
      request: {
        query: GET_EXPENSE_ITEMS,
        variables: {
          type: AccountType.DEBIT,
        },
      },
      result : {
        ...results
      },
    },
  ];

  return render(<MockedProvider addTypename={false} mocks={mocks}><ExpenseList type={AccountType.DEBIT} /></MockedProvider>)
};

describe('ExpenseList', () => {
  it('renders spinner when is loading', () => {
    const { queryByText } = subject();
    const spinner = queryByText('Loading...');

    expect(spinner).not.toBeNull();
  });

  it('renders error when there is an error', async () => {
    const hasError = true
    const { queryByText } = subject(hasError);

    await wait(() => {
      const errorMessage = queryByText("Something went wrong... Please refresh the page.");
      expect(errorMessage).not.toBeNull()
    });
  });

  it('renders the items', async () => {
    const { queryAllByTestId, queryByText } = subject();

    await wait(() => {
      const items = queryAllByTestId("row");
      
      expect(queryByText('Statement')).not.toBeNull();
      expect(queryByText('All Transactions')).not.toBeNull();
      expect(items.length).toBe(2);
    });
  });

  it('does not render transactions header', async () => {
    const emptyResults = true;
    const hasError = false;
    const { queryByText } = subject(hasError, emptyResults);

    await wait(() => {
      expect(queryByText('Statement')).toBeNull();
      expect(queryByText('All Transactions')).toBeNull();
    });
  });
});