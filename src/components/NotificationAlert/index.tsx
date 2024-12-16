import React from 'react';

import { Alert } from '@tiger-analytics/react/notification';

import { useNotificationApiContext } from '../../store/NotificationStore';
import { useNotificationValueContext } from '../../store/NotificationStore';

const NotificationAlert = () => {
  const { message } = useNotificationValueContext();
  const { updateErrorNotification } = useNotificationApiContext();

  const notificationDismissHandler = () => {
    updateErrorNotification({ title: '', additionalMessage: '' });
  };
  return (
    <Alert
      id="portal-notification"
      visible={!!message.title}
      title={message.title}
      onClose={notificationDismissHandler}>
      <p>{message.additionalMessage}</p>
    </Alert>
  );
};

export default NotificationAlert;
