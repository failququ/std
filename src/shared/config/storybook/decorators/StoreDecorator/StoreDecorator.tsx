import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/util';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: () => any) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
