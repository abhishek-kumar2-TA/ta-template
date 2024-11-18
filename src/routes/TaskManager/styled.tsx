import styled, { css } from 'styled-components';

export const CreateTaskForm = styled.form`
  width: 100%;
  padding: 1rem;
  background-color: var(--colors-secondary-base);
  border-radius: var(--global-componentRadius);
  gap: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--colors-textPrimary-base);
  }
`;

export const Card = styled.div`
  padding: 0.5rem 0.8rem;
  border-radius: var(--global-componentRadius);
  border: 2px solid var(--colors-secondary-base);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 220px;
  }

  p {
    flex-grow: 1;
    border-top: 1px solid var(--colors-secondary-base);
  }

  h3 {
    color: var(--colors-textPrimary-base);
  }
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
