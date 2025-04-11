import { getIsAuthData } from 'entities/User';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuth = useSelector(getIsAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RouteUrls.home} state={{ from: location }} />;
  }

  return children;
}
