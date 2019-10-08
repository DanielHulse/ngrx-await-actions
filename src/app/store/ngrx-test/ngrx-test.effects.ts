import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { action1Complete, action2Complete, allActionsComplete, performActions } from './ngrx-test.actions';
import { delay, first, map, mergeMap, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Injectable()
export class NgrxTestEffects {

  constructor(private actions$: Actions) { }

  performAction1$ = createEffect(() => this.actions$.pipe(
    ofType(performActions),
    mergeMap(() => {
      return of(action1Complete()).pipe(delay(this.randomDelay()));
    })
  ));

  performAction2$ = createEffect(() => this.actions$.pipe(
    ofType(performActions),
    mergeMap(() => {
      return of(action2Complete()).pipe(delay(this.randomDelay()));
    })
  ));

  actionsComplete$ = createEffect(() => this.actions$.pipe(
    ofType(performActions),
    mergeMap(() => {
      const action1$ = this.actions$.pipe(ofType(action1Complete), first());
      const action2$ = this.actions$.pipe(ofType(action2Complete), first());
      return forkJoin(action1$, action2$).pipe(first(), map(() => allActionsComplete()));
    })
  ));

  private randomDelay() {
    return Math.floor(Math.random() * (500 - 2500 + 1) + 500);
  }
}
