import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { ErrorMessage, StyledLoginContainer, StyledLoginWrapper } from './styled';
import { useUserContext } from '../../store/LoggedUserStore';
import { getUrl } from '../../utils';

type TextInputComponentType = HTMLElement & {
  onChangeHandler?: (value: string) => void; // Define the type of the custom property
};

export const LoginComponent = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { updateUser } = useUserContext();

  const usernameRef = useRef<TextInputComponentType | null>(null);
  const passwordRef = useRef<TextInputComponentType | null>(null);

  const usernameChangeHandler = (value: string) => {
    setUserName(value);
  };

  const passwordChangeHandler = (value: string) => {
    setPassword(value);
  };

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

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.onChangeHandler = usernameChangeHandler;
    }
    if (passwordRef.current) {
      passwordRef.current.onChangeHandler = passwordChangeHandler;
    }
  });

  console.log(username);

  return (
    <ta-grid-container
      showSideMargin={false}
      restrictHeightToMaxContent={false}
      style={{ height: '100%' }}>
      <StyledLoginWrapper>
        <StyledLoginContainer onSubmit={loginFormSubmitHandler}>
          <h1>Sign in</h1>
          <ta-text-input ref={usernameRef} value={username} label="Username" />
          <ta-text-input ref={passwordRef} value={password} label="Password" type="password" />
          <ErrorMessage>{loginError ? 'Invalid credentials' : ''}</ErrorMessage>
          <ta-button type="submit">Submit</ta-button>
        </StyledLoginContainer>
      </StyledLoginWrapper>
    </ta-grid-container>
  );
};
