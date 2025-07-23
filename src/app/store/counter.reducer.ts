import { Action, createReducer, on } from '@ngrx/store';
import { increase } from './conter.actions';
// import { CounterActions, INCREMENT, IncrementAction } from './conter.actions';

const initialState = 0;

export const counterReducer = createReducer(
	initialState,
	on(increase, (state, action) => state + action.value),
);

// export function counterReducer(state = initialState, action: CounterActions | Action) {
// 	if (action.type === INCREMENT) {
// 		return state + (action as IncrementAction).value;
// 	}
// 	return state;
// }