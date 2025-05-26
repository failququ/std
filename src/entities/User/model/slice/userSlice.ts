import { PayloadAction } from '@reduxjs/toolkit';
import { getToken, removeToken } from '@/shared/lib/helpers/localStorage/tokenHelper';
import { buildSlice } from '@/shared/lib/store';
import { getMe } from '../services/getMe';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  isAuth: false,
  userData: undefined,
  _isInit: false,
};

const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData: (state) => {
      const token = getToken();
      if (token) {
        state.isAuth = true;
      }
      state._isInit = true;
    },
    logout: (state) => {
      state.userData = undefined;
      state.isAuth = false;
      removeToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.userData = action.payload;
        const token = getToken();
        if (token) {
          state.isAuth = true;
        }
        state._isInit = true;
      })
      .addCase(getMe.rejected, (state) => {
        state.isAuth = false;
      });
  },
});

export const { actions: userActions, reducer: userReducer, useActions: useUserActions } = userSlice;
