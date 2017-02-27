import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    HttpModule
  ],
  exports: [ CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule ],
  declarations: []
})
export class ShareModule {
}
