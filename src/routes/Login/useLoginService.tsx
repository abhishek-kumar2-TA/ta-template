import { useFetchApi } from '@tiger-analytics/utils/fetchApi';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { getUrl } from '../../utils';
import { useUserContext } from '../../store/LoggedUserStore';
import { User } from '../../models';

export const useLoginService = () => {
  const { defaultFetch } = useFetchApi();
  const { clearUser, updateUser } = useUserContext();
  const navigateTo = useNavigate();

  const loginUser = async (username: string, password: string): Promise<User | undefined> => {
    const response = await defaultFetch({
      url: getUrl('/login'),
      fetchRequestInit: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      },
      errorHandler: () => {},
    });
    if (response) {
      const loginData = await response.json();
      return loginData.username && loginData.role ? loginData : undefined;
    } else {
      return undefined;
    }
  };

  const logoutUser = async () => {
    await defaultFetch({
      url: getUrl('/logout'),
      fetchRequestInit: {
        credentials: 'include',
      },
      errorHandler: () => {},
    });
    clearUser();
  };

  const getUserSession = async () => {
    const response = await defaultFetch({
      url: getUrl('/session'),
      fetchRequestInit: {
        credentials: 'include',
      },
      errorHandler: () => {},
    });
    if (response) {
      const loginData = await response.json();
      updateUser(loginData);
    } else {
      clearUser();
      navigateTo('/');
    }
  };

  return { loginUser, logoutUser, getUserSession };
};
