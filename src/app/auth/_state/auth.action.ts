import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/_models/user.model';

export const LOGIN = '[AUTH] Logging in';
export const LOGIN_SUCCESS = '[AUTH] Login success';

export const AUTO_LOGIN_ACTION = '[AUTH][localstorage] Auto login';

export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register success';

export const LOGOUT = '[AUTH] Logout';

//

export const Login = createAction(
  LOGIN,
  props<{ email: string; password: string }>()
);

export const LoginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);

export const signUp = createAction(
  REGISTER,
  props<{ email: string; password: string }>()
);

export const signUpSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const logoutAction = createAction(LOGOUT);
