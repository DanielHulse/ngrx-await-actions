import { NgrxTestState } from './model/ngrx-test.state';
import { action1Complete, action2Complete, performActions, allActionsComplete, reset } from './ngrx-test.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: NgrxTestState = {
  performingActions: false,
  action1Complete: false,
  action2Complete: false,
  allActionsComplete: false
};

const reducer = createReducer(
  initialState,
  on(performActions, () => ({
    ...initialState,
    performingActions: true
  })),
  on(action1Complete, state => ({
    ...state,
    action1Complete: true
  })),
  on(action2Complete, state => ({
    ...state,
    action2Complete: true
  })),
  on(allActionsComplete, state => ({
    ...state,
    allActionsComplete: true
  })),
  on(reset, () => ({...initialState}))
);

export function ngrxTestReducer(state: NgrxTestState, action: Action) {
  return reducer(state, action);
}
