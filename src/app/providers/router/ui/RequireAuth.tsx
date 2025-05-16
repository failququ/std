import { getIsAuth, getUserRoles, UserRole } from 'entities/User';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: React.ReactNode;
  roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();

  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RouteUrls.home} state={{ from: location }} />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RouteUrls.forbidden} state={{ from: location }} />;
  }

  return children;
}
