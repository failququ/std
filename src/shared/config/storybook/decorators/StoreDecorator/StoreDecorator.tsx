import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/util';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByEmail/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: () => any) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
);
