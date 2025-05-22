import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ThunkExtraArgs } from '@/app/providers/StoreProvider/config/StateSchema';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

type ActionCreatorType<Return, Arg = void, RejectedValue = unknown>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
export class TestAsyncThunk<Return, Arg = void, RejectedValue = unknown> {
  dispatch: jest.MockedFunction<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  extra: ThunkExtraArgs;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.extra = {
      api: mockedAxios,
    };
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
  }

  async callThunk(arg?: Arg) {
    const action = this.actionCreator(arg!);
    const result = await action(this.dispatch, this.getState, this.extra);

    return result;
  }
}
