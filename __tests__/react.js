import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App.jsx';

describe('App component tests', () => {
    it('App renders', () => {
        const app = render(<App />);
        expect(app).not.toBe(null);
    })
})

describe('login functionality', () => {
    let login
})

describe('Unit testing React components', () => {
    let num = 7;
    it('this num should equal 7', () => {
        expect(num).toEqual(7);
    });
    it('should have some text', () => {
        let someText = 'some text';
        expect(typeof someText === 'string').toBe(true)
        expect(typeof someText).toBe('string');
    })
});

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

