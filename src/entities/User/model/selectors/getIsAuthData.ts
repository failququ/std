import { StateSchema } from 'app/providers/StoreProvider';

export const getIsAuthData = (state: StateSchema) => state.user.isAuth;
