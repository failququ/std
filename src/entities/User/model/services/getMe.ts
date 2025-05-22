import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../types/user';

export const getMe = createAsyncThunk<User, void, ThunkConfig<string>>(
  'profile/getMe',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<User>(
        '/user/me',
      );
      if (!response.data) throw new Error();

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
