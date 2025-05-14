import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (userId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    const fetchProfileUrl = userId
      ? `/user/profile/${userId}`
      : '/user/profile';

    try {
      const response = await extra.api.get<Profile>(
        fetchProfileUrl,
      );
      if (!response.data) throw new Error();

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
