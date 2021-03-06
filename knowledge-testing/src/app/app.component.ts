import { Component } from '@angular/core';
import { Views } from './ui/nav-item/views';

@Component({
  selector: 'kt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewHome = Views.HOME;
  viewUsers =  Views.USERS;
  viewTests =  Views.TESTS;
  viewReactive = Views.REACTIVE;
  viewWiki = Views.WIKI;

  title = 'Knowledge Tester';
  sidenavOpen = false;
  // currentView = Views.HOME;

  openSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  chooseView() {
    // this.currentView = view;
    // console.log(Views[view]);
    this.sidenavOpen = false;
  }
}
