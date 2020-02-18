import React from 'react';
import { render } from '@testing-library/react';

import ExpenseListHeader from './ExpenseListHeader';

describe('ExpenseListHeader', () => {
  it('renders the list header', () => {
    const { queryByText } = render(<ExpenseListHeader />);

    expect(queryByText(/date/i)).toBeInTheDocument();
    expect(queryByText(/description/i)).toBeInTheDocument();
    expect(queryByText(/type/i)).toBeInTheDocument();
    expect(queryByText(/in/i)).toBeInTheDocument();
    expect(queryByText(/out/i)).toBeInTheDocument();
    expect(queryByText(/balance/i)).toBeInTheDocument();
  });
});
