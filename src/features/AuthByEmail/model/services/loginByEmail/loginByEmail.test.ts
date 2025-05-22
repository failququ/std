import axios from 'axios';
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk';
import { loginByEmail } from './loginByEmail';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getLoginEmail', () => {
  const thunk = new TestAsyncThunk(loginByEmail);

  beforeEach(() => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: {
        access_token: 'token',
        user: {
          id: '1',
          email: 'email',
        },
      },
    }));
  });

  test('should call post request and be successful', async () => {
    const result = await thunk.callThunk({ email: 'email', password: 'password' });
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should return token and user', async () => {
    const result = await thunk.callThunk({ email: 'email', password: 'password' });
    expect(result.payload).toEqual({
      access_token: 'token',
      user: {
        id: '1',
        email: 'email',
      },
    });
  });

  test('should return reject status', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject(new Error()));
    const result = await thunk.callThunk({ email: 'email', password: 'password' });

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
