import React, { lazy, Suspense, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { GridContainer } from '@tiger-analytics/react/grid';

import { LayoutComponent } from './components/layout';

import { LoginComponent } from './routes/Login';
import { useUserContext } from './store/LoggedUserStore';
import { useLoginService } from './routes/Login/useLoginService';
const TaskManager = lazy(() => import('./routes/TaskManager'));
const Help = lazy(() => import('./routes/Help'));

const App = () => {
  const { user } = useUserContext();
  const { getUserSession } = useLoginService();

  useEffect(() => {
    getUserSession();
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
