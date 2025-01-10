import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { GridContainer } from '@tiger-analytics/react/grid';

import { Header } from './Header';
import { Footer } from './Footer';
import NotificationAlert from '../NotificationAlert';

export const MainContainer = styled.div`
  margin-top: 70px;
  flex-grow: 1;
  overflow: auto;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const LayoutComponent = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NotificationAlert />
      <MainContainer as="main">{props.children}</MainContainer>
      <Footer />
    </>
  );
};
