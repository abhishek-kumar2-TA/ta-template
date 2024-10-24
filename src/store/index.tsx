import React, { ReactNode } from 'react';

import { UserContextProvider } from './LoggedUserStore';
import { NotificationContextProvider } from './NotificationStore';

export const Store = (props: { children: ReactNode }) => {
  return (
    <UserContextProvider>
      <NotificationContextProvider>{props.children}</NotificationContextProvider>
    </UserContextProvider>
  );
};
