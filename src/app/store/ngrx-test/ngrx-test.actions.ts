import { createAction } from '@ngrx/store';

export const performActions = createAction('Perform multiple actions');

export const action1Complete = createAction('Action 1 complete');

export const action2Complete = createAction('Action 2 complete');

export const allActionsComplete = createAction('Performed actions complete');

export const reset = createAction('Reset');
