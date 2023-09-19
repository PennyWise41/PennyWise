import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App.jsx';
import LoginPage from '../client/pages/loginPage.jsx';

const mockStore = configureStore([]);

describe('logInPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('has an input with label "Username"', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    screen.debug();
    const usernameInput = screen.getByLabelText('Username');
    expect(usernameInput).toBeInTheDocument();
  });

  test('dispatches actions on login success', async () => {
    const mockResponse = {
      loggedIn: true,
      id: 1,
      username: 'testuser',
      firstname: 'Test',
      lastname: 'User',
    };
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    render(
      <Provider store={store}>
        <logInPage />
      </Provider>
    );

    userEvent.type(screen.getByLabelText('Username'), 'testuser');
    userEvent.type(screen.getByLabelText('Password'), 'testpassword');
    fireEvent.click(screen.getByText('Log In'));

    // Use assertions to check the dispatched actions
    expect(store.getActions()).toEqual([
      // Define the expected actions dispatched after successful login
      // For example: loggingIn(true), setID(1), setUserName('testuser'), etc.
    ]);
  });

  // Add more tests as needed
});

describe('login functionality', () => {
  let loginPageRender;

  beforeEach(() => {
    loginPageRender = render(<LoginPage />);
  });
  it('login page renders', () => {
    expect(loginPageRender).not.toBe(null);
  });

  let dummyUser = {};

  it('user should be able to input username and password', () => {
    const usernameTextBox = loginPageRender.queryByPlaceholderText('username');
    const passwordTextBox = loginPageRender.queryByPlaceholderText('password');
    expect(passwordTextBox).not.toBeNull;

    const { container } = loginPageRender;

    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('password');

    // Simulate user input
    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');

    // Verify that the inputs have the correct values
    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpassword');
  });
});

describe('more random testing', () => {
  let text;

  let props = { userName: 'serena', password: '12345' };
  beforeAll(() => {
    text = render(<div>{props.userName}</div>);
  });

  test('this will test a div', () => {
    expect(text).not.toBe(null);
  });
});
