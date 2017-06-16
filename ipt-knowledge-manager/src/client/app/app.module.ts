/*
 * Copyright (c) 2015-2017 IPT-Intellectual Products & Technologies (IPT).
 * All rights reserved.
 *
 * This file is licensed under terms of GNU GENERAL PUBLIC LICENSE Version 3
 * (GPL v3). The full text of GPL v3 license is providded in file named LICENSE,
 * residing in the root folder of this project.
 *
 */

import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Feature modules
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UiModule } from './ui/ui.module';
import { MdIconModule } from '@angular/material';
import { routes } from './routes';
import { UserEffects } from './users/user.effects';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { reducer } from './root.reducer';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CoreModule,
    UiModule,

    /**
     * StoreModule.provideStore is imported only once in the root module
     * accepting as param a reducer function or map of reducers.
     */
    StoreModule.provideStore(reducer),

    /**
     * @ngrx/router-store keeps router state in the store and uses
     * it as the single source of truth.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store by aggregating state changes,
     * enabling oditing and 'time-travel' debugging.
     * To use it, please install Redux Devtools Chrome or Firefox extension
     * from appropriate browser store. For details see:
     * https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * @ngrx - IndexedDB integeation - configure it with db schema
     */
    // DBModule.provideDB(schema),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
