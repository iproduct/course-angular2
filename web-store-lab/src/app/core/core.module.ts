/*
 * Copyright (c) 2015-2018 IPT-Intellectual Products & Technologies (IPT).
 * All rights reserved.
 *
 * This software provided by IPT-Intellectual Products & Technologies (IPT)
 * is for non-commercial illustartive and evaluation purposes only.
 * It is NOT SUITABLE FOR PRODUCTION purposes because it is not finished,
 * and may contain security flаws and weaknesses.
 *
 * This file is licensed under terms of GNU GENERAL PUBLIC LICENSE Version 3
 * (GPL v3). The full text of GPL v3 license is providded in file named LICENSE,
 * residing in the root folder of this repository.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {HttpClientModule} from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendMockService } from './backend-mock.service';
import { LoggerService } from './logger.service';
import { BackendPromiseService } from './backend-promise.service';
import { BackendService } from './backend.service';
import { BackendHttpService } from './backend-http.service';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

export let BACKEND_PROMISE_SERVICE = new InjectionToken<BackendPromiseService>('backend.service');
export let BACKEND_SERVICE = new InjectionToken<BackendService>('backend.service');

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: BACKEND_SERVICE, useClass: BackendHttpService },
    LoggerService
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
