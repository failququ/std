import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ThunkExtraArgs } from 'app/providers/StoreProvider/config/StateSchema';

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFunction<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  extra: ThunkExtraArgs;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, extra: ThunkExtraArgs) {
    this.actionCreator = actionCreator;
    this.extra = extra;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, this.extra);

    return result;
  }
}
