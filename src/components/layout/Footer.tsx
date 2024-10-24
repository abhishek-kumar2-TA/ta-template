import { GridColumn, GridContainer } from '@tiger-analytics/ui/grid';
import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled(GridContainer)`
  height: 100px;
  color: ${(props) => props.theme.colors.textPrimary};
  border-top: 2px solid ${(props) => props.theme.colors.secondary.base};
`;

export const FooterContent = styled(GridColumn)`
  margin-top: 1rem;
`;

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <FooterContent>1.0.0</FooterContent>
    </StyledFooter>
  );
};
