import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyFirstAngularWebsite/header/header.component';
import { TopnavComponent } from './MyFirstAngularWebsite/topnav/topnav.component';
import { TxtBlockLeftComponent } from './MyFirstAngularWebsite/txt-block-left/txt-block-left.component';
import { TxtBlockRightComponent } from './MyFirstAngularWebsite/txt-block-right/txt-block-right.component';
import { OnewayBindingComponent } from './BindingDemo/oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './BindingDemo/twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    TxtBlockLeftComponent,
    TxtBlockRightComponent,
    OnewayBindingComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
