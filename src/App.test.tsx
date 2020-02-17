import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router';

jest.mock('./pages/Account', () => () => <div>Account Page</div>)

const subject = () => render(<MemoryRouter><App /></MemoryRouter>);

const login = (queryByTestId, queryByText) => {
  // const email = container.querySelector("[name=emailAddress]");
  // const password = container.querySelector("[name=password]");
  // const submitButton = container.querySelector('.loginButton');

  const email = queryByTestId("emailField");
  const password = queryByTestId("passwordField");
  const submitButton = queryByText("Submit");

  fireEvent.change(email, { target: { value: 'test@example.com'} });
  fireEvent.change(password, { target: { value: '123'} } );
  fireEvent.click(submitButton);
}

describe('App', () => {
  it('it redirects to the login page on render', () => {
    const { queryByText } = subject();
    const loginLabel = queryByText(/login to your personal account/i);

    expect(loginLabel).not.toBeNull();
  });

  it('renders the header', () => {
    const { container } = subject();
    const header = container.querySelector('header');

    expect(header).not.toBeNull();
  });

  it('navigates the app', async () => {
    const { queryByText, queryByTestId } = subject();
    login(queryByTestId, queryByText);
    
    await wait(() => {
      const accountPageTitle = queryByText(/account page/i);
      const privacyButton = queryByText(/privacy/i);

      expect(accountPageTitle);

      fireEvent.click(privacyButton);
    });

    await wait(() => {
      const privacyPageTitle = queryByText(/privacy policy/i);
      const logoutButton = queryByText(/logout/i);

      expect(privacyPageTitle).not.toBeNull();

      fireEvent.click(logoutButton);
    });

    await wait(() => {
      const loginPageTitle = queryByText(/login to your personal account/i);

      expect(loginPageTitle).not.toBeNull()
    });
  });
});




/// refactoring initialvalues and names in formik