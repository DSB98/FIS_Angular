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
import { EventBindingComponent } from './BindingDemo/event-binding/event-binding.component';
import { NgIfDemoComponent } from './DirectivesDemo/ng-if-demo/ng-if-demo.component';
import { NgSwitchDemoComponent } from './DirectivesDemo/ng-switch-demo/ng-switch-demo.component';
import { NgForDemoComponent } from './DirectivesDemo/ng-for-demo/ng-for-demo.component';
import { AngularPipeDemoComponent } from './PipeDemo/angular-pipe-demo/angular-pipe-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './InputOutputDecorator/InputDecorator/product/product.component';
import { ProductListComponent } from './InputOutputDecorator/InputDecorator/product-list/product-list.component';
import { ChildComponent } from './InputOutputDecorator/OutputDecorator/child/child.component';
import { ParentComponent } from './InputOutputDecorator/OutputDecorator/parent/parent.component';
import { ConsumeUtilityServiceComponent } from './ServiceDemo/consume-utility-service/consume-utility-service.component';



const appRoutes:Routes=[
  
  {path:'header',component:HeaderComponent},
  {path:'onewaybinding',component:OnewayBindingComponent},
  {path:'twowaybinding',component:TwowayBindingComponent},
  {path:'eventbinding',component:EventBindingComponent},
  {path:'ngfor',component:NgForDemoComponent},
  {path:'ngswitch',component: NgSwitchDemoComponent},
  {path:'ngif',component: NgIfDemoComponent},
  {path:'pipe',component:AngularPipeDemoComponent},
  {path:'product',component:ProductComponent},
  {path: 'parent',component:ParentComponent},
  {path:'service',component:ConsumeUtilityServiceComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    TxtBlockLeftComponent,
    TxtBlockRightComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
    EventBindingComponent,
    NgIfDemoComponent,
    NgSwitchDemoComponent,
    NgForDemoComponent,
    AngularPipeDemoComponent,
    ProductComponent,
    ProductListComponent,
    ChildComponent,
    ParentComponent,
    ConsumeUtilityServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
