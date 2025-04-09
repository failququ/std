import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  const thunk = new TestAsyncThunk(fetchProfileData);

  beforeEach(() => {
    mockedAxios.get.mockReturnValue(Promise.resolve({
      data,
    }));
  });

  test('should return data', async () => {
    const result = await thunk.callThunk();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should return reject status', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject(new Error()));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
