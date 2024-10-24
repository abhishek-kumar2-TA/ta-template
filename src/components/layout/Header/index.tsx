import React from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper, LogoutButton, MainNav, ProjectName } from './styled';
import { useUserContext } from '../../../store/LoggedUserStore';
import { getUrl } from '../../../utils';

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
      <ProjectName>Portal Template</ProjectName>
      {user ? (
        <MainNav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/feature-2" className={({ isActive }) => (isActive ? 'active' : '')}>
            Feature 2
          </NavLink>
          <LogoutButton onClick={logoutClickHandler}>Logout</LogoutButton>
        </MainNav>
      ) : null}
    </HeaderWrapper>
  );
};
