import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../const/const';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastName: 'Ivanov',
  firstName: 'Ivan',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('validateProfileData', () => {
  test('should not contain errors', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('should contain incorrect user data error', () => {
    const result = validateProfileData({ ...data, firstName: '', lastName: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should contain incorrect age error', () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should contain incorrect currency error', () => {
    const result = validateProfileData({ ...data, currency: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
  });

  test('should contain incorrect country error', () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should contain all errors', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CURRENCY,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
