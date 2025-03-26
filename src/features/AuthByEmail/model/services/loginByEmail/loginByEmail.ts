import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { setToken } from 'shared/lib/tokenHelper';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  access_token: string;
}

export const loginByEmail = createAsyncThunk<LoginResponse, LoginPayload, { rejectValue: string }>(
  'login/loginByEmail',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post<LoginResponse>(
        'http://localhost:5111/auth/login',
        { email, password },
      );
      if (!response.data) throw new Error();

      setToken(response.data.access_token);
      thunkAPI.dispatch(userActions.setAuthData(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(i18n.t('features.authByEmail.error'));
    }
  },
);
