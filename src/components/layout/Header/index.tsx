import React from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper, LogoContainer, LogoutButton, MainNav, ProjectName } from './styled';
import { useUserContext } from '../../../store/LoggedUserStore';
import { getUrl } from '../../../utils';
import TigerLogo from '../../../assets/images/TA-Logo.png';

export const Header = () => {
  const { user, clearUser } = useUserContext();

  const logoutClickHandler = () => {
    fetch(getUrl('/logout'), {
      credentials: 'include',
    })
      .then(() => {
        clearUser();
      })
      .catch(() => {
        clearUser();
      });
  };

  return (
    <HeaderWrapper>
      <LogoContainer>
        <img src={TigerLogo} alt="Tiger Analytics Logo" />
      </LogoContainer>
      {user ? (
        <MainNav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Task manager
          </NavLink>
          <NavLink to="/help" className={({ isActive }) => (isActive ? 'active' : '')}>
            Help
          </NavLink>
          <LogoutButton onClick={logoutClickHandler}>Logout</LogoutButton>
        </MainNav>
      ) : null}
    </HeaderWrapper>
  );
};
