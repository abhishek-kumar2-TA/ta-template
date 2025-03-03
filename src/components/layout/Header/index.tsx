import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { useLoginService } from '../../../routes/Login/useLoginService';

import { HeaderWrapper, LogoContainer, LogoutButton, MainNav } from './styled';
import { useUserContext } from '../../../store/LoggedUserStore';
import TigerLogo from '../../../assets/images/TA-Logo.png';

export const Header = () => {
  const { user } = useUserContext();
  const { logoutUser } = useLoginService();
  const navigateTo = useNavigate();

  const logoutClickHandler = async () => {
    await logoutUser();
    navigateTo('/');
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
