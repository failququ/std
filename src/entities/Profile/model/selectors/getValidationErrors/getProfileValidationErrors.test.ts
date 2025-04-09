import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getValidationErrors } from './getValidationErrors';

describe('getProfileValidationErrors', () => {
  it('should return profile isLoading', () => {
    const errors = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: errors,
      },
    };

    expect(getValidationErrors(state as StateSchema)).toEqual(errors);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };

    expect(getValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
