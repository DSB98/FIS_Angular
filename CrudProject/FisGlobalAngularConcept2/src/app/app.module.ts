import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushSpliceWithForDemoComponent } from './AngularConcept/push-splice-with-for-demo/push-splice-with-for-demo.component';
import { TemplateDrivenFormDemoComponent } from './AngularFormsDemo/template-driven-form-demo/template-driven-form-demo.component';
import { ReactiveFormDemoComponent } from './AngularFormsDemo/reactive-form-demo/reactive-form-demo.component';
import { FormBuilderDemoComponent } from './AngularFormsDemo/form-builder-demo/form-builder-demo.component';
import { AddUserComponent } from './CRUDUserWithWebApi/add-user/add-user.component';
import { UpdateUserComponent } from './CRUDUserWithWebApi/update-user/update-user.component';
import { DeleteUserComponent } from './CRUDUserWithWebApi/delete-user/delete-user.component';
import { DetailsUserComponent } from './CRUDUserWithWebApi/details-user/details-user.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './CRUDUserWithWebApi/users-list/users-list.component';
const  appRoutes: Routes=[
  {path:'AddUser',component:AddUserComponent},
  {path:'UsersList',component:UsersListComponent},
  {path:'DeleteUser',component:DeleteUserComponent},
  {path:'UpdateUser/:id',component:UpdateUserComponent},
  {path: 'DetailsUser',component:DetailsUserComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    PushSpliceWithForDemoComponent,
    TemplateDrivenFormDemoComponent,
    ReactiveFormDemoComponent,
    FormBuilderDemoComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    DetailsUserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
