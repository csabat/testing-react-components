import React from 'react';
import { render, fireEvent, wait, queryByTestId } from '@testing-library/react';

import Login from './Login';

const mockPush = jest.fn()

jest.mock('react-router', () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

const subject = () => render(<Login />);

describe('Login', () => {
  it('renders the picture', () => {
    const { queryByTestId } = subject();
    const backgroundPicture = queryByTestId("picture");

    expect(backgroundPicture).not.toBeNull();
  });

  it('renders bank title and motto', () => {
    const { queryByText } = subject();
    const bankTitle = queryByText(/generous bank/i);
    const motto = queryByText(/values we trust/i);

    expect(bankTitle).not.toBeNull();
    expect(motto).not.toBeNull();
  });

  it('renders the form', async () => {
    const { queryByText, queryByTestId } = subject();
    
    const email = queryByTestId("emailField");
    const password = queryByTestId("passwordField");
    const submitButton = queryByText("Submit");

    expect(email).not.toBeNull();
    expect(password).not.toBeNull();
    expect(submitButton).not.toBeNull();
  });
});