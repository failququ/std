import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileReducer } from './profileSlice';

describe('profileSLice', () => {
  it('should have correct init state', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      data: undefined,
      isLoading: false,
      error: '',
      readonly: true,
      form: undefined,
      validationErrors: undefined,
    };
    expect(profileReducer(initialState as ProfileSchema, { type: 'unknown' }))
      .toEqual(initialState);
  });
});
