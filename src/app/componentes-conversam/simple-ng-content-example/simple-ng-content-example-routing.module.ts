import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleNgContentExampleComponent } from './simple-ng-content-example.component';

const routes: Routes = [ { path: '', component: SimpleNgContentExampleComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class SimpleNgContentExampleRoutingModule {
}
