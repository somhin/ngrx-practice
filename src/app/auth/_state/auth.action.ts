import { createAction, props } from '@ngrx/store';

export const LOGIN = '[AUTH] Logging in';
export const LOGIN_SUCCESS = '[AUTH] Login success';
export const LOGIN_FAILED = '[AUTH] Login failed';

export const Login = createAction(
  LOGIN,
  props<{ email: string; password: string }>()
);

export const LoginSuccess = createAction(LOGIN_SUCCESS);
export const LoginFailed = createAction(LOGIN_FAILED);
