import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastName: 'Ivanov',
  firstName: 'Ivan',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('updateProfileData', () => {
  const thunk = new TestAsyncThunk(updateProfileData, {
    profile: {
      form: data,
    },
  });

  beforeEach(() => {
    mockedAxios.put.mockReturnValue(Promise.resolve({
      data,
    }));
  });

  test('should update data', async () => {
    const result = await thunk.callThunk();
    expect(mockedAxios.put).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should return no data error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('should return server error', async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should return validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data, firstName: '', lastName: '', age: undefined,
        },
      },
    });

    mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
