import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profileData?: Profile) => {
  if (!profileData) return [ValidateProfileError.NO_DATA];
  const {
    firstName, lastName, username, age, country, currency,
  } = profileData;
  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName || !username) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
