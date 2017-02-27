import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormRoutingModule } from './signup-form-routing.module';
import { SignupFormComponent } from './signup-form.component';

@NgModule({
  imports: [
    CommonModule,
    SignupFormRoutingModule
  ],
  declarations: [ SignupFormComponent ]
})
export class SignupFormModule {
}
