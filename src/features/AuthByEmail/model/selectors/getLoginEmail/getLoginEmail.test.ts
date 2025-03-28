import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/util';
import { getLoginEmail } from './getLoginEmail';

describe('getLoginEmail', () => {
  test('should return email', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        email: 'email',
      },
    };
    expect(getLoginEmail(state as StateSchema)).toEqual('email');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });
});
