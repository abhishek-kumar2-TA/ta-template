import React from 'react';
import { Alert, Snackbar } from '@mui/material';

import { useNotificationApiContext } from '../store/NotificationStore';
import { useNotificationValueContext } from '../store/NotificationStore';

const NotificationAlert = () => {
  const { message } = useNotificationValueContext();
  const { updateErrorNotification } = useNotificationApiContext();

  const notificationDismissHandler = () => {
    updateErrorNotification({ title: '', additionalMessage: '' });
  };
  return (
    <>
      {message.title ? (
        <Snackbar
          open={true}
          onClose={notificationDismissHandler}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          style={{ top: '100px' }}
          autoHideDuration={null}>
          <Alert
            variant="filled"
            severity="error"
            style={{ width: '500px' }}
            onClose={notificationDismissHandler}>
            <b>{`${message.title}`}</b>
            <br />
            {message.additionalMessage}
          </Alert>
        </Snackbar>
      ) : null}
    </>
  );
};

export default NotificationAlert;
