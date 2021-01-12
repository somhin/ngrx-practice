import { createAction, props } from '@ngrx/store';

export const increment = createAction('[COUNTER] Increment');
export const decrement = createAction('[COUNTER] Decrement');
export const reset = createAction('[COUNTER] Reset');

export const customIncrement = createAction(
  '[CUSTOM COUNTER] Increment',
  props<{ value: number }>()
);
