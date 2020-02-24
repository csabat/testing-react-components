import React from 'react';
import { render, wait, queryByText } from '@testing-library/react';

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

// try it in action

describe('ExpenseList', () => {
  it('renders spinner when is loading', () => {
 
  });

  it('renders error when there is an error', async () => {

  });

  it('renders the items', async () => {


  });

  it('does not render transactions header', async () => {

  });
});