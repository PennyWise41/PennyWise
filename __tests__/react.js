import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App.jsx';
import logInPage from '../client/pages/loginPage.jsx';


// describe('App component tests', () => {
//     it('App renders', () => {
//         let store = require('../client/store.js')
//         const app = render(<Provider store={store}><App /></Provider>);
//         expect(app).not.toBe(null);
//     })
// })

describe('login functionality', () => {
    let loginPageRender;

    beforeEach(() => {
        loginPageRender = render(<loginPage />)
    })
    it('login page renders', () => {
        expect(loginPageRender).not.toBe(null);
    })

    let dummyUser = {}

    it("user should be able to input username and password", () => {
        const usernameTextBox = loginPageRender.queryByPlaceholderText('username')
        const passwordTextBox = loginPageRender.queryByPlaceholderText('password');
        expect(passwordTextBox).not.toBeNull;

        const { container } = loginPageRender;
        console.log(container)
        const divEl = container.querySelector('div');
        expect(divEl).toBeInTheDocument();
    });


})

describe('more random testing', () => {
    let text;

    let props = { userName: 'serena', password: '12345' };
    beforeAll(() => {
        text = render(<div>{props.userName}</div>);
    });

    test('this will test a div', () => {
        expect(text).not.toBe(null)
    })


})