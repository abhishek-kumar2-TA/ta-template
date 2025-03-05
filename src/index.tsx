import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeWrapper } from '@tiger-analytics/react/theme';
import isPropValid from '@emotion/is-prop-valid';

import './index.scss';

import { StyleSheetManager } from 'styled-components';

import { reportWebVitals } from './utils';
import App from './App';
import { Store } from './store';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <ThemeWrapper>
      <Store>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Store>
    </ThemeWrapper>
  </StyleSheetManager>
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
