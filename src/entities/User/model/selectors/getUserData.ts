import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getUserData = (state: StateSchema) => state.user.userData;

export const [useUserData, getUserDataNew] = buildSelector((state: StateSchema) => state.user.userData);
