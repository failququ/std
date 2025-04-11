export interface User {
  id: string;
  email: string;
}

export interface UserSchema {
  authData?: User;
  isAuth?: boolean;

  _isInit: boolean;
}
