import React, { lazy, Suspense, useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { GridContainer } from '@tiger-analytics/react/grid';

import { LayoutComponent } from './components/layout';

import { LoginComponent } from './routes/Login';
import { useUserContext } from './store/LoggedUserStore';
import { getUrl } from './utils';
const TaskManager = lazy(() => import('./routes/TaskManager'));
const Help = lazy(() => import('./routes/Help'));

const App = () => {
  const { user, updateUser, clearUser } = useUserContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch(getUrl('/session'), {
      credentials: 'include',
    })
      .then((response) => {
        // console.log(response.headers.get("content-type"));
        if (!response.ok) {
          throw new Error('Invalid session');
        }
        return response.json();
      })
      .then((data) => {
        if (data.username && data.role) {
          updateUser(data);
        }
      })
      .catch(() => {
        clearUser();
        navigateTo('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutComponent>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? (
          <GridContainer showSideMargin restrictHeightToMaxContent>
            <Routes>
              <Route path="/" element={<TaskManager />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </GridContainer>
        ) : (
          <GridContainer showSideMargin style={{ minHeight: '100%' }}>
            <Routes>
              <Route path="/" element={<LoginComponent />} />
            </Routes>
          </GridContainer>
        )}
      </Suspense>
    </LayoutComponent>
  );
};

export default App;
