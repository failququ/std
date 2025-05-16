import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth roles={route.roles}>{route.element}</RequireAuth> : route.element}
    />
  ), []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
