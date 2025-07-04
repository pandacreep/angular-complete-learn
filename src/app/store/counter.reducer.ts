import { createReducer, on } from '@ngrx/store';
import { increase } from './conter.actions';

const initialState = 0;

export const counterReducer = createReducer(
	initialState,
	on(increase, (state) => state + 1),
);