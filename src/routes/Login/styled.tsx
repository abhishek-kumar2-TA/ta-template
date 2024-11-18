import styled from 'styled-components';

export const StyledLoginWrapper = styled('ta-grid-column')`
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
