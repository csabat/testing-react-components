import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';
import { login } from './../../../App.test';

const mockSubmit = jest.fn();

const subject = () => render(<LoginForm onSubmit={mockSubmit} />);

describe('LoginForm', () => {
  it('submit the form', async () => {
    const { container, queryByTestId, queryByText } = subject();
    login(container, queryByTestId, queryByText);
    await wait(() => expect(mockSubmit).toBeCalled());
  });

  it('validates the form', async () => {
    const { queryByText } = subject();
    const button = queryByText('Submit');

    fireEvent.click(button);

    await wait(() => {
      expect(queryByText('Please provide your email address.')).not.toBeNull();
      expect(queryByText('Password is required.')).toBeInTheDocument();
    })
  })
});
