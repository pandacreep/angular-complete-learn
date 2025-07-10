import { createAction, props } from '@ngrx/store';

export const increase = createAction(
	'[Counter] Increment',
	props<{ value: number }>()
);
