import { getIsAuthData } from './model/selectors/getIsAuthData';
import { getIsInit } from './model/selectors/getIsInit/getIsInit';
import { getUserData } from './model/selectors/getUserData';
import { userActions, userReducer } from './model/slice/userSlice';
import type { User, UserSchema } from './model/types/user';

export {
  getIsAuthData, getIsInit, getUserData, User, userActions, userReducer, UserSchema,
};
