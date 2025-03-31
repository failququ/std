import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  it('should have correct init state', () => {
    const initialState: DeepPartial<LoginSchema> = {
      email: '',
      password: '',
      isLoading: false,
      error: '',
    };

    expect(loginReducer(initialState as LoginSchema, { type: 'unknown' }))
      .toEqual(initialState);
  });

  it('should update email', () => {
    const state: DeepPartial<LoginSchema> = { email: '' };

    expect(loginReducer(state as LoginSchema, loginActions.setEmail('email')))
      .toEqual({ email: 'email' });
  });

  it('should update password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password')))
      .toEqual({ password: 'password' });
  });
});
