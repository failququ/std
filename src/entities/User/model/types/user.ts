export interface User {
  id: string;
  email: string;
  username?: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  isAuth?: boolean;

  _isInit: boolean;
}
