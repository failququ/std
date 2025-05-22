import { Reducer } from '@reduxjs/toolkit';
import { useEffect, type FC, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateSchema, StateSchemaKey, StoreWithManager } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

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
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted = mountedReducers[reducerKey as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
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
