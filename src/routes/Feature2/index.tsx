import React, { useEffect, useState } from 'react';

import { Spacer } from '@tiger-analytics/ui/placeholder';

import { GridColumn, GridContainer } from '@tiger-analytics/ui/grid';

import { Button, ButtonVariant } from '@tiger-analytics/ui/button';

import { PricingRecord } from '../../models';
import { ActionItemColumn, TertiaryContainer } from './styled';
import { useNotificationApiContext } from '../../store/NotificationStore';

export const Feature2 = () => {
  const [storeContent, setStoreContent] = useState<PricingRecord[]>([]);
  const [fetchError, setFetchError] = useState(false);
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
      <GridContainer>
        <GridColumn>
          <Spacer height="1rem" />
          <h1 className="pageHeader">Feature 2</h1>
          <Spacer height="2rem" />
        </GridColumn>
      </GridContainer>
      <GridContainer>
        <GridColumn $spanDesktop={8} $spanMedium={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </GridColumn>
        <ActionItemColumn
          $spanDesktop={4}
          $spanMedium={6}
          $alignItemsDesktop="flex-end"
          $alignItemsMedium="flex-end">
          <Button
            onClick={() =>
              updateErrorNotification({
                title: 'Custom error',
                additionalMessage: 'Test message from feature 2',
              })
            }>
            Primary
          </Button>
          <Button $variant={ButtonVariant.Secondary}>Secondary</Button>
        </ActionItemColumn>
      </GridContainer>
      <Spacer height="2rem" />
      <TertiaryContainer>
        <ActionItemColumn
          $spanDesktop={4}
          $spanMedium={6}
          $spanSmall={0}
          $alignItemsDesktop="flex-end"
          $alignItemsMedium="flex-end">
          <Button>Primary</Button>
          <Button $variant={ButtonVariant.Secondary}>Secondary</Button>
        </ActionItemColumn>
        <GridColumn $spanDesktop={8} $spanMedium={6}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </GridColumn>
        <ActionItemColumn
          $spanDesktop={0}
          $spanMedium={0}
          $spanSmall={6}
          $alignItemsDesktop="flex-end"
          $alignItemsMedium="flex-end">
          <Button>Primary</Button>
          <Button $variant={ButtonVariant.Secondary}>Secondary</Button>
        </ActionItemColumn>
      </TertiaryContainer>
      <Spacer height="2rem" />
    </>
  );
};
