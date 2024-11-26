import React, { ReactNode } from 'react';

import { UserContextProvider } from './LoggedUserStore';
import { NotificationContextProvider } from './NotificationStore';
import { FetchContextProviderComponent } from './FetchContextProviderComponent';

export const Store = (props: { children: ReactNode }) => {
  return (
    <UserContextProvider>
      <NotificationContextProvider>
        <FetchContextProviderComponent>{props.children}</FetchContextProviderComponent>
      </NotificationContextProvider>
    </UserContextProvider>
  );
};
