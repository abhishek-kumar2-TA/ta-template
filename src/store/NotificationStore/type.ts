import { ReactNode } from 'react';

export interface NotificationMessage {
  title: string;
  additionalMessage: ReactNode;
}

export interface NotificationValueContextType {
  message: NotificationMessage;
}

export interface NotificationApiContextType {
  updateErrorNotification: (message: NotificationMessage) => void;
}
