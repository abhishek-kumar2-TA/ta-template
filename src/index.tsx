import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@tiger-analytics/ui/theme/global-style.css';
import '@tiger-analytics/ui';

import { createTheme } from '@tiger-analytics/ui';
createTheme();

import './index.scss';

import App from './App';

import { Store } from './store';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
);
