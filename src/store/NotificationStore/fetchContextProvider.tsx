import React, { ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { NotificationMessage, NotificationValueContextType } from './type';
import { NotificationApiContext, NotificationValueContext } from './notificationContext';

export const NotificationContextProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<NotificationValueContextType>({
    message: { title: '', additionalMessage: '' },
  });

  const notificationApis = useMemo(() => {
    return { updateErrorNotification: (message: NotificationMessage) => setMessage({ message }) };
  }, []);

  return (
    <NotificationApiContext.Provider value={notificationApis}>
      <NotificationValueContext.Provider value={message}>
        {children}
      </NotificationValueContext.Provider>
    </NotificationApiContext.Provider>
  );
};

export const useNotificationValueContext = () => {
  return useContext(NotificationValueContext);
};

export const useNotificationApiContext = () => {
  return useContext(NotificationApiContext);
};
