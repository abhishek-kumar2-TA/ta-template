import React, { ReactNode } from 'react';

import { FetchContextProvider } from '@tiger-analytics/utils/fetchApi';

import { useUserContext } from './LoggedUserStore';
import { useNotificationApiContext } from './NotificationStore';

export const FetchContextProviderComponent = ({ children }: { children: ReactNode }) => {
  const { clearUser } = useUserContext();
  const { updateErrorNotification } = useNotificationApiContext();

  return (
    <FetchContextProvider
      updateErrorNotification={(title: string, additionalMessage: string) =>
        updateErrorNotification({ title, additionalMessage })
      }
      cleanupErrorNotification={() => updateErrorNotification({ title: '', additionalMessage: '' })}
      handle401Response={() => clearUser()}>
      {children}
    </FetchContextProvider>
  );
};
