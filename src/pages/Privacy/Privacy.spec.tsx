import React from 'react';
import { render } from '@testing-library/react';

import Privacy from './Privacy';

describe('Privacy', () => {
  it('renders the page', () => {
    const { container } = render(<Privacy/>);

    expect(container).toMatchSnapshot();
  });
});