import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken, removeToken } from 'shared/lib/helpers/tokenHelper';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  isAuth: false,
  authData: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action:PayloadAction<User>) => {
      state.authData = action.payload;
      state.isAuth = true;
    },
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
