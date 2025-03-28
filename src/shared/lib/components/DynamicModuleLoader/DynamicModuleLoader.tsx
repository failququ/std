import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithManager } from 'app/providers/StoreProvider';
import { useEffect, type FC, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

export type ReducersListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
  children: ReactNode;
  removeAfterUnmount?: boolean;
  reducers: ReducersList;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, removeAfterUnmount, reducers,
  } = props;

  const store = useStore() as StoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };

    // eslint-disable-next-line
    }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default DynamicModuleLoader;
