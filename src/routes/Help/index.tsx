import React, { useEffect } from 'react';

import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';

import { Button, ButtonVariant } from '@tiger-analytics/react/button';

import { ActionItemColumn, TertiaryContainer } from './styled';
import { useNotificationApiContext } from '../../store/NotificationStore';

export const Help = () => {
  const { updateErrorNotification } = useNotificationApiContext();

  useEffect(() => {
    return () => updateErrorNotification({ title: '', additionalMessage: '' });
  });

  return (
    <>
      <GridContainer>
        <GridColumn>
          <h1 className="pageHeader">Help</h1>
        </GridColumn>
      </GridContainer>
      <GridContainer>
        <GridColumn lg={8} md={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </GridColumn>
        <ActionItemColumn lg={4} md={6} style={{ alignItems: 'flex-end' }}>
          <Button
            id="custom-error"
            onClick={() =>
              updateErrorNotification({
                title: 'Custom error',
                additionalMessage: 'Test message from dashboard',
              })
            }>
            Primary
          </Button>
          <Button id="demo-secondary" variant={ButtonVariant.Secondary}>
            Secondary
          </Button>
        </ActionItemColumn>
      </GridContainer>
      <TertiaryContainer>
        <ActionItemColumn lg={4} md={6} sm={0} style={{ alignItems: 'flex-end' }}>
          <Button id="primary2">Primary</Button>
          <Button id="demo-secondary2" variant={ButtonVariant.Secondary}>
            Secondary
          </Button>
        </ActionItemColumn>
        <GridColumn lg={8} md={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </GridColumn>
        <ActionItemColumn lg={0} md={0} sm={6} style={{ alignItems: 'flex-end' }}>
          <Button id="primary3">Primary</Button>
          <Button id="secondary3" variant={ButtonVariant.Secondary}>
            Secondary
          </Button>
        </ActionItemColumn>
      </TertiaryContainer>
    </>
  );
};

export default Help;
