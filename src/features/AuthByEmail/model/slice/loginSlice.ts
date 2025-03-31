import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmail.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
