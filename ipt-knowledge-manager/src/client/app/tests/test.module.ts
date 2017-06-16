import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { DataListModule } from 'primeng/primeng';
import { MdSelectModule, MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { TestDetailComponent } from './components/test-detail.component';
import { TestListComponent } from './components/test-list.component';
import { TestService } from './test.service';
import { TestRoutingModule } from './test-routing.module';
import { TestEffects } from './test.effects';
import { TestActions } from './test.actions';
import { TestResolver } from './test-resolver';
import { RootState as State, reducers } from '../root.reducer';
import { Store, combineReducers, ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core';
import { environment } from '../../environments/environment';
import { testsReducer, State as TestState } from './test.reducer';
import * as fromTests from './test.reducer';
import { SharedModule } from '../shared/shared.module';
import { makeRootReducer } from '../shared/reducer-helpers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TestRoutingModule,
    DataListModule,
    MdSelectModule,
    MdInputModule,
    MdButtonModule,
    EffectsModule.run(TestEffects)
  ],
  providers: [
    TestService,
    TestActions,
    TestResolver
  ],
  declarations: [
    TestDetailComponent,
    TestListComponent
  ],
  exports: [
    TestDetailComponent,
    TestListComponent
  ]
})
export class TestModule {
  constructor(private store: Store<State>) {
    reducers.tests = testsReducer;
    store.replaceReducer(makeRootReducer<RootState>(reducers));
  }
}

export interface RootState extends State {
  tests: TestState;
}
