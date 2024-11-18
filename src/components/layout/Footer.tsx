import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled('ta-grid-container')`
  height: 50px;
  color: var(--colors-textPrimary-base);
  border-top: 2px solid var(--colors-secondary-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledFooterContentText = styled.span`
  font-size: 12px;
`;

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <StyledFooterContentText>Copyright ©2024. Tiger Analytics Limited</StyledFooterContentText>
      <StyledFooterContentText>Version: 1.0.0</StyledFooterContentText>
    </StyledFooter>
  );
};
