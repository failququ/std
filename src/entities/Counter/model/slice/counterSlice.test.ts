import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counter slice', () => {
  const state: CounterSchema = { value: 5 };

  test('should increment', () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });

  test('should decrement', () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
