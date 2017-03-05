import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentExampleComponent } from './ng-content-example.component';

const routes: Routes = [ { path: '', component: NgContentExampleComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class NgContentExampleRoutingModule {
}
