import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BootstrapDemoComponent } from './BootstrapDemo/bootstrap-demo/bootstrap-demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapDatepickerComponent } from './BootstrapDemo/ngx-bootstrap-datepicker/ngx-bootstrap-datepicker.component';
import { Route } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    BootstrapDemoComponent,
    NgxBootstrapDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
