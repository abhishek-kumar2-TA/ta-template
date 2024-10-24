import { GridColumn, GridContainer } from '@tiger-analytics/ui/grid';
import styled from 'styled-components';

export const ActionItemColumn = styled(GridColumn)`
  flex-direction: row;
  gap: 1rem;
`;

export const TertiaryContainer = styled(GridContainer)`
  background-color: ${({ theme }) => theme.colors.tertiary.base};
  padding: 1rem;
`;
