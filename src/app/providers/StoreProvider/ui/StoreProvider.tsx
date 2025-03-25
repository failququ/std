import { DeepPartial } from 'app/types/util';
import type { FC } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/createReduxStore';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: DeepPartial<StateSchema>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
