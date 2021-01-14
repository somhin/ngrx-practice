import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION = '[SHARED] Set loading spinner';
export const SET_ERROR_MESSAGE = '[SHARED] Set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
