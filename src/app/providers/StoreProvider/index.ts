import type { AppDispatch } from './config/createReduxStore';
import { createReduxStore } from './config/createReduxStore';
import type {
  StateSchema,
  StateSchemaKey,
  StoreWithManager,
  ThunkConfig,
  ThunkExtraArgs,
} from './config/StateSchema';
import StoreProvider from './ui/StoreProvider';

export {
  AppDispatch,
  createReduxStore,
  StateSchema,
  StateSchemaKey,
  StoreProvider,
  StoreWithManager,
  ThunkConfig,
  ThunkExtraArgs,
};
