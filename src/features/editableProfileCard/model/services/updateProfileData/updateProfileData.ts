import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../const/const';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);
    if (errors.length) return rejectWithValue(errors);

    try {
      const response = await extra.api.put<Profile>('/user/profile', formData);

      if (!response.data) throw new Error();
      return response.data;
    } catch (error) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
