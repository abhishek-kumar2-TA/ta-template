import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface ActionItemColumnProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  lg?: number;
  md?: number;
  sm?: number;
}

export const ActionItemColumn = styled('ta-grid-column')<ActionItemColumnProps>`
  flex-direction: row;
  gap: 1rem;
`;

export const TertiaryContainer = styled('ta-grid-container')`
  background-color: ${({ theme }) => theme.colors.tertiary.base};
  padding: 1rem;
`;
