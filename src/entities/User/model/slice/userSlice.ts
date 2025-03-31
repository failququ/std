import { createSlice } from '@reduxjs/toolkit';
import { getToken, removeToken } from 'shared/lib/helpers/tokenHelper';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  isAuth: false,
  authData: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData: (state) => {
      const token = getToken();
      if (token) {
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.authData = undefined;
      state.isAuth = false;
      removeToken();
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
