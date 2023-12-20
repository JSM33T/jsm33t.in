import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryComponent } from './recovery/recovery.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
