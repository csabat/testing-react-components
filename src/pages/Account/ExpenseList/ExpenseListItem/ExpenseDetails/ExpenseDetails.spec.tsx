import React from 'react';
import { render } from '@testing-library/react';

import ExpenseDetails from './ExpenseDetails';
import { details } from '../../expenseListItem.mock';

const subject = () => render(<ExpenseDetails details={details} />);

describe('ExpenseDetails', () => {
  it('renders the detail header', () => {
    const { queryByText } = subject();

    expect(queryByText("The payment of $1000 was taken from your account.")).not.toBeNull();
  })
  it('renders the details', () => {
    const { queryByText } = render(<ExpenseDetails details={details} />)
    
    expect(queryByText(/transaction type/i)).not.toBeNull();
    expect(queryByText(/payee name/i)).not.toBeNull();
    expect(queryByText(/account number/i)).not.toBeNull();
    expect(queryByText(/reference/i)).not.toBeNull();
    expect(queryByText(/sort code/i)).not.toBeNull();
  });
});