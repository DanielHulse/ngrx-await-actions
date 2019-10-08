import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { NgrxTestModule } from './components/ngrx-test/ngrx-test.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    NgrxTestModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      serialize: true
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
