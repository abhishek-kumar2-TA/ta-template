import React from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper, LogoutButton, MainNav, ProjectName } from './styled';
import { useUserContext } from '../../../store/LoggedUserStore';
import { getUrl } from '../../../utils';
import { TigerLogo } from '../../../assets/svg';

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
      <TigerLogo />
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
