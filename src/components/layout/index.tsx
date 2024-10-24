import React, { ReactNode } from 'react';

import { GridContainer } from '@tiger-analytics/ui/grid';

import { Header } from './Header';
import { Footer } from './Footer';
import NotificationAlert from '../NotificationAlert';

export const LayoutComponent = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NotificationAlert />
      <GridContainer $isSectionContainer={false} role="main">
        {props.children}
      </GridContainer>
      <Footer />
    </>
  );
};
