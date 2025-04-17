import { getIsAuth } from './model/selectors/getIsAuthData';
import { getIsInit } from './model/selectors/getIsInit/getIsInit';
import { getUserData } from './model/selectors/getUserData';
import { getMe } from './model/services/getMe';
import { userActions, userReducer } from './model/slice/userSlice';
import type { User, UserSchema } from './model/types/user';

export {
  getIsAuth, getIsInit, getMe, getUserData, User, userActions, userReducer, UserSchema,
};
