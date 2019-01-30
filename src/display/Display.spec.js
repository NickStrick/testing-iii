// Test away!
import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display/>', () => {
    it('should display closed gate', () => {
        const { getByText } = render(<Display closed={true} locked={false} />);

        getByText(/closed/i);
        getByText(/unlocked/i);
    })
})