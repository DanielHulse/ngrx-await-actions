import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxTestStoreModule } from './ngrx-test/ngrx-test.store.module';

@NgModule({
  imports: [
    CommonModule,
    NgrxTestStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule { }
