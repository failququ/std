import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteForbidden, getRouteMain } from '@/shared/constants/router';
import { getIsAuth, getUserRoles, UserRole } from '@/entities/User';

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
    return <Navigate to={getRouteMain()} state={{ from: location }} />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} />;
  }

  return children;
}
