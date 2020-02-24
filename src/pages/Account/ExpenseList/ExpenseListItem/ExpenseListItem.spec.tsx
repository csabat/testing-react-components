import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { item } from '../expenseListItem.mock';

import ExpenseListItem from './ExpenseListItem';

const subject = () => render(<ExpenseListItem item={item} />)

describe('ExpenseListItem', () => {
  it('renders the item', () => {
    const { getByTestId, queryByText } = subject();
    getByTestId('row'); // <-- actually would throw an error if it is not found

    expect(queryByText(/12 dec 2019/i)).not.toBeNull();
    expect(queryByText(/goodwill/i)).not.toBeNull();
    expect(queryByText(/debit/i)).not.toBeNull();
    expect(queryByText('0')).not.toBeNull();
    expect(queryByText('1000')).not.toBeNull();
    expect(queryByText('500')).not.toBeNull();
  });

  it('show the details', () => {
    const { getByTestId, queryByText } = subject();
    const item = getByTestId('row');

    fireEvent.click(item);
    // you can do more value specific assert to make sure you have everything in a right place and format.
    expect(queryByText(/transaction type/i)).not.toBeNull();
  });
});
