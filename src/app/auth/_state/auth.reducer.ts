import { createReducer, on } from '@ngrx/store';
import { LoginSuccess, logoutAction, signUpSuccess } from './auth.action';
import { initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(LoginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signUpSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logoutAction, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
