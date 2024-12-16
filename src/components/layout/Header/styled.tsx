import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 70px;
  background: var(--colors-secondaryBackground-base);
  color: var(--colors-textPrimary-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: inherit;
  }
`;

export const ProjectName = styled.div`
  font-size: 2rem;
  flex-grow: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 120px;

  img {
    width: 100%;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: var(--colors-textPrimary-base);
    text-decoration: none;
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--colors-secondaryBackground-base);
  }

  .active {
    border-bottom: 2px solid var(--colors-secondary-base);
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  color: var(--colors-textPrimary-base);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 8px;
`;
