import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SimpleFormModule } from './simple-form/simple-form.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { WikiModule } from './wiki/wiki.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductsModule,
    BrowserAnimationsModule,
    SimpleFormModule,
    RxDemoModule,
    WikiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
