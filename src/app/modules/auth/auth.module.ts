import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
      RegisterFormComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
