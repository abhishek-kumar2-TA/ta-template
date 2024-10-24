import { createContext } from 'react';

import { NotificationApiContextType, NotificationValueContextType } from './type';

export const NotificationValueContext = createContext<NotificationValueContextType>(
  {} as NotificationValueContextType
);

export const NotificationApiContext = createContext<NotificationApiContextType>(
  {} as NotificationApiContextType
);
