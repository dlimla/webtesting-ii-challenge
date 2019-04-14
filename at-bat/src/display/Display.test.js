import React from 'react';
import { render } from 'react-testing-library'

import 'jest-dom/extend-expect';
import Display from './Display'


describe('the display component', () => {

    it('renders display component without crashing', () => {
        render(<Display />)
    })

    it('should display the header', () => {
        const { getByText } = render(<Display />);
        getByText(/Batter Count/i)
    })

})


