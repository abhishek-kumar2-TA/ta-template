import React from 'react';
import ReactDom from 'react-dom/client';
import '@tiger-analytics/ui';

import './index.scss';

import { BrowserRouter } from 'react-router-dom';

import { createTheme } from '@tiger-analytics/ui';

import App from './App';
import { Store } from './store';

createTheme();

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
);
