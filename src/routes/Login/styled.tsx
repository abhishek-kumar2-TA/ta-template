import { GridColumn } from '@tiger-analytics/react/grid';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface StyledLoginWrapperProps {
  children: ReactNode;
}

export const StyledLoginWrapper = styled(GridColumn)<StyledLoginWrapperProps>`
  justify-content: center;
  align-items: center;
`;

export const StyledLoginContainer = styled.form`
  width: 340px;
  border: 1px solid var(--colors-primary-base);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ErrorMessage = styled.div`
  color: var(--colors-error-base);
  font-size: 12px;
  height: 12px;
`;
