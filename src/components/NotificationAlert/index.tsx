import React from 'react';

import { useNotificationApiContext } from '../../store/NotificationStore';
import { useNotificationValueContext } from '../../store/NotificationStore';
import { CloseButton, NotificationWrapper } from './styled';

const NotificationAlert = () => {
  const { message } = useNotificationValueContext();
  const { updateErrorNotification } = useNotificationApiContext();

  const notificationDismissHandler = () => {
    updateErrorNotification({ title: '', additionalMessage: '' });
  };
  return (
    <NotificationWrapper isVisible={!!message.title} className={!message.title ? 'fade-out' : ''}>
      <div>
        <b>{`${message.title}`}</b>
        <br />
        <p>{message.additionalMessage}</p>
      </div>
      <CloseButton onClick={notificationDismissHandler} aria-label="Close notification">
        x
      </CloseButton>
    </NotificationWrapper>
  );
};

export default NotificationAlert;
