import { UserRole } from '../const/const';

export interface User {
  id: string;
  email: string;
  username?: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  userData?: User;
  isAuth?: boolean;

  _isInit: boolean;
}
