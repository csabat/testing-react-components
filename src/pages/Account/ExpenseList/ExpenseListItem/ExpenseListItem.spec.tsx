import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { item } from '../expenseListItem.mock';

import ExpenseListItem from './ExpenseListItem';

const subject = () => render(<ExpenseListItem item={item} />)

describe('ExpenseListItem', () => {
  it('renders the item', () => {
    const { getByTestId } = subject();
    const item = getByTestId('row');

    expect(item.children.length).toBe(6);
  });

  it('show the details', () => {
    const { getByTestId, queryByText } = subject();
    const item = getByTestId('row');

    fireEvent.click(item);

    expect(queryByText(/transaction type/i)).not.toBeNull();
  });
});
