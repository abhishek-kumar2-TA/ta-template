import React, { useEffect, useState } from 'react';

import { ButtonVariant } from '@tiger-analytics/ui';

import { ActionItemColumn, TertiaryContainer } from './styled';
import { useNotificationApiContext } from '../../store/NotificationStore';

export const Help = () => {
  const { updateErrorNotification } = useNotificationApiContext();

  useEffect(() => {
    // fetch('/api/v1/pricing', {
    //   credentials: 'include',
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Invalid session');
    //     } else {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     setStoreContent(data);
    //     setFetchError(false);
    //   })
    //   .catch(() => {
    //     setFetchError(true);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ta-grid-container>
        <ta-grid-column>
          <h1 className="pageHeader">Help</h1>
        </ta-grid-column>
      </ta-grid-container>
      <ta-grid-container>
        <ta-grid-column lg={8} md={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </ta-grid-column>
        <ActionItemColumn lg={4} md={6} style={{ alignItems: 'flex-end' }}>
          <ta-button
            onClickHandler={() =>
              updateErrorNotification({
                title: 'Custom error',
                additionalMessage: 'Test message from dashboard',
              })
            }>
            Primary
          </ta-button>
          <ta-button variant={ButtonVariant.Secondary}>Secondary</ta-button>
        </ActionItemColumn>
      </ta-grid-container>
      <TertiaryContainer>
        <ActionItemColumn lg={4} md={6} sm={0} style={{ alignItems: 'flex-end' }}>
          <ta-button>Primary</ta-button>
          <ta-button variant={ButtonVariant.Secondary}>Secondary</ta-button>
        </ActionItemColumn>
        <ta-grid-column lg={8} md={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </ta-grid-column>
        <ActionItemColumn lg={0} md={0} sm={6} style={{ alignItems: 'flex-end' }}>
          <ta-button>Primary</ta-button>
          <ta-button variant={ButtonVariant.Secondary}>Secondary</ta-button>
        </ActionItemColumn>
      </TertiaryContainer>
    </>
  );
};

export default Help;
