import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../const/const';

export const getUserRoles = (state: StateSchema) => state.user.userData?.roles;
export const isUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.ADMIN));
export const isUserModerator = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.MODERATOR));
