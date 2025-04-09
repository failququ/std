import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: '',
  readonly: true,
  form: undefined,
  validationErrors: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.data, ...action.payload };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validationErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.validationErrors = undefined;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readonly = true;
      state.validationErrors = undefined;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validationErrors = action.payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
