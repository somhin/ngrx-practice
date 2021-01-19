import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { AuthReducer } from '../auth/_state/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/_state/auth.selector';
import { AuthState } from '../auth/_state/auth.state';
import { SharedReducer } from './shared/shared.reducers';
import { SHARED_STATE_NAME } from './shared/shared.selectors';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  router: routerReducer,
};
