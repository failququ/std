import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { setToken } from 'shared/lib/helpers/tokenHelper';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  access_token: string;
}

export const loginByEmail = createAsyncThunk<LoginResponse, LoginPayload, ThunkConfig<string>>(
  'login/loginByEmail',
  async ({ email, password }, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<LoginResponse>(
        '/auth/login',
        { email, password },
      );
      if (!response.data) throw new Error();

      setToken(response.data.access_token);
      dispatch(userActions.setAuthData(response.data.user));
      extra.navigate?.('/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
