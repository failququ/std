import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/util';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 1 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
  });
});
