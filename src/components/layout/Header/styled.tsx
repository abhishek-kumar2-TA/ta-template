import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 80px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const ProjectName = styled.div`
  font-size: 2rem;
  flex-grow: 1;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: ${(props) => props.theme.colors.textPrimary};
    text-decoration: none;
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary.base};
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 8px;
`;
