import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '..client/App.jsx';

describe('Unit testing React components', () => {
    let num = 7;
    it('this num should equal 7', () => {
        expect(num).toEqual(7);
    });
})

