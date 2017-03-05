import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildViewChildrenComponent } from './view-child-view-children.component';

const routes: Routes = [ { path: '', component: ViewChildViewChildrenComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ViewChildViewChildrenRoutingModule {
}
