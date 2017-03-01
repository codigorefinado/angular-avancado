import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentChildChildrenComponent } from './content-child-children.component';

const routes: Routes = [ { path: '', component: ContentChildChildrenComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ContentChildChildrenRoutingModule {
}
