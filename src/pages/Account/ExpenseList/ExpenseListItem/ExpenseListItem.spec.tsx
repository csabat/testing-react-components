import React from 'react';
import { render } from '@testing-library/react';
import { item } from '../expenseListItem.mock';

import ExpenseListItem from './ExpenseListItem';

const subject = () => render(<ExpenseListItem item={item} />)

describe('ExpenseListItem', () => {
  it('renders the item', () => {
    
  });

  it('show the details', () => {

  })
});