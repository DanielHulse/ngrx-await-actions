import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { performActions, reset } from '../../store/ngrx-test/ngrx-test.actions';
import { Observable } from 'rxjs';
import { NgrxTestState } from '../../store/ngrx-test/model/ngrx-test.state';
import { ngrxTestStateSelector } from '../../store/ngrx-test/ngrx-test.selectors';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html'
})
export class NgrxTestComponent implements OnInit {

  ngrxTestState$: Observable<NgrxTestState>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.ngrxTestState$ = this.store.select(ngrxTestStateSelector);
  }

  performActions() {
    this.store.dispatch(performActions());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
