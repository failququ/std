import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByEmail';

export interface StateSchema {
  user: UserSchema;
  login: LoginSchema;
}
