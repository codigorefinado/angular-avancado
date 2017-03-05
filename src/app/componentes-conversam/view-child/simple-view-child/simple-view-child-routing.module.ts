import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleViewChildComponent } from './simple-view-child.component';

const routes: Routes = [ { path: '', component: SimpleViewChildComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class SimpleViewChildRoutingModule {
}
