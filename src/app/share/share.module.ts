import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpModule ],
  declarations: []
})
export class ShareModule {
}
