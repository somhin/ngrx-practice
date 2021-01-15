import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/_models/user.model';

export const LOGIN = '[AUTH] Logging in';
export const LOGIN_SUCCESS = '[AUTH] Login success';
export const LOGIN_FAILED = '[AUTH] Login failed';

export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register success';

export const Login = createAction(
  LOGIN,
  props<{ email: string; password: string }>()
);

export const LoginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const signUp = createAction(
  REGISTER,
  props<{ email: string; password: string }>()
);

export const signUpSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ user: User }>()
);
