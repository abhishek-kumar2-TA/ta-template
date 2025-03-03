import React, { FormEvent, useState } from 'react';
import { Button } from '@tiger-analytics/react/button';
import { TextInput } from '@tiger-analytics/react/formFields';

import { ErrorMessage, StyledLoginContainer, StyledLoginWrapper } from './styled';
import { useUserContext } from '../../store/LoggedUserStore';
import { useLoginService } from './useLoginService';

export const LoginComponent = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { updateUser } = useUserContext();
  const { loginUser } = useLoginService();

  const loginFormSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginUserData = await loginUser(username, password);
    if (loginUserData) {
      updateUser(loginUserData);
    } else {
      setLoginError(true);
    }
  };

  const inputChangeHandler = (event: FormEvent, inputField: string = 'username') => {
    const inputTarget = event.target as HTMLInputElement;
    if (inputField === 'username') {
      setUserName(inputTarget.value);
    } else {
      setPassword(inputTarget.value);
    }
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer onSubmit={loginFormSubmitHandler}>
        <h1>Sign in</h1>
        <TextInput
          id="username"
          value={username}
          label="Username"
          onInput={(e) => inputChangeHandler(e)}
        />
        <TextInput
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
  );
};
