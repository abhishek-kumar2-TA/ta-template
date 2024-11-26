import React, { FormEvent, useState } from 'react';
import { GridContainer } from '@tiger-analytics/react/grid';
import { Button } from '@tiger-analytics/react/button';
import { Input } from '@tiger-analytics/react/formFields';

import { ErrorMessage, StyledLoginContainer, StyledLoginWrapper } from './styled';
import { useUserContext } from '../../store/LoggedUserStore';
import { getUrl } from '../../utils';

export const LoginComponent = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { updateUser } = useUserContext();

  const loginFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(getUrl('/login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then((data) => {
        if (data.username && data.role) {
          updateUser(data);
        }
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const inputChangeHandler = (event: Event, inputField: string = 'username') => {
    const inputTarget = event.target as HTMLInputElement;
    if (inputField === 'username') {
      setUserName(inputTarget.value);
    } else {
      setPassword(inputTarget.value);
    }
  };

  return (
    <GridContainer
      showSideMargin={false}
      restrictHeightToMaxContent={false}
      style={{ height: '100%' }}>
      <StyledLoginWrapper>
        <StyledLoginContainer onSubmit={loginFormSubmitHandler}>
          <h1>Sign in</h1>
          <Input
            id="username"
            value={username}
            label="Username"
            onInput={(e) => inputChangeHandler(e)}
          />
          <Input
            id="password"
            value={password}
            label="Password"
            type="password"
            onInput={(e) => inputChangeHandler(e, 'password')}
          />
          <ErrorMessage>{loginError ? 'Invalid credentials' : ''}</ErrorMessage>
          <Button id="login-submit" type="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </StyledLoginContainer>
      </StyledLoginWrapper>
    </GridContainer>
  );
};
