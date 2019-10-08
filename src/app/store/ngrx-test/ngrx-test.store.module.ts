import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgrxTestEffects } from './ngrx-test.effects';
import { StoreModule } from '@ngrx/store';
import { ngrxTestReducer } from './ngrx-test.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([NgrxTestEffects]),
    StoreModule.forFeature('ngrxTest', ngrxTestReducer)
  ]
})
export class NgrxTestStoreModule { }
