import { createFeatureSelector } from '@ngrx/store';
import { NgrxTestState } from './model/ngrx-test.state';

export const ngrxTestStateSelector = createFeatureSelector<NgrxTestState>('ngrxTest');
