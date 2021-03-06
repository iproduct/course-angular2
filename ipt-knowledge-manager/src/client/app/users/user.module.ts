/*
 * Copyright (c) 2015-2017 IPT-Intellectual Products & Technologies (IPT).
 * All rights reserved.
 *
 * This file is licensed under terms of GNU GENERAL PUBLIC LICENSE Version 3
 * (GPL v3). The full text of GPL v3 license is providded in file named LICENSE,
 * residing in the root folder of this project.
 *
 */

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { DataListModule } from 'primeng/primeng';
import {MatSelectModule} from '@angular/material/select';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { UserDetailComponent } from './components/user-detail.component';
import { UserListComponent } from './components/user-list.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { LoginService } from './login.service';
import { UserEffects } from './user.effects';
import { UserActions } from './user.actions';
import { UserResolver } from './user-resolver';
import {RootState as OldRootState} from '../root.reducer';
import { Store, combineReducers, ActionReducer, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { usersReducer, State as UserState } from './user.reducer';
import * as fromUsers from './user.reducer';
import { createSelector } from 'reselect';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
    DataListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    UserService,
    LoginService,
    UserActions,
    UserResolver
  ],
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  exports: [
    UserDetailComponent,
    UserListComponent
  ]
})
export class UserModule {
  constructor() {

  }
}

export interface RootState extends OldRootState {
  users: UserState;
}
