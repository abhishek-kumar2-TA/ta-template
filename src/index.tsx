import React from 'react';
import ReactDom from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { TigerThemeProvider } from '@tiger-analytics/ui/theme';

import App from './App';
import { Store } from './store';
import GlobalStyle from './components/GlobalStyle';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <TigerThemeProvider disableGlobalStyle>
    <GlobalStyle />
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </TigerThemeProvider>
);
