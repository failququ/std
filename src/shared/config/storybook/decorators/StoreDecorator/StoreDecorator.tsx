import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByEmail/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: () => any) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
);
