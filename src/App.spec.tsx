import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { Store } from './store';

describe('app load test', () => {
  it('should load the app', () => {
    render(
      <Store>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Store>
    );
    const appText = screen.getByText('Sign in');
    expect(appText).toBeTruthy();
  });
});
