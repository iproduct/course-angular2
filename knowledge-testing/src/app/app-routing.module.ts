import {Route, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { Demo01Component } from './reactive-demo/demo01/demo01.component';
import { WikiComponent } from './wiki/wiki.component';
import { RouteNotFoundComponent } from './ui/route-not-found/route-not-found.component';

const APP_ROUTES: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tests', component: TestListComponent },
  { path: 'reactive-demo', component: Demo01Component },
  { path: 'wiki-demo', component: WikiComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
