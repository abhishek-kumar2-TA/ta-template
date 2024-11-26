import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';
import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface ActionItemColumnProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  lg?: number;
  md?: number;
  sm?: number;
}

export const ActionItemColumn = styled(GridColumn)<ActionItemColumnProps>`
  flex-direction: row;
  gap: 1rem;
`;

export const TertiaryContainer = styled(GridContainer)`
  background-color: var(--colors-tertiary-base);
  padding: 1rem;
`;
