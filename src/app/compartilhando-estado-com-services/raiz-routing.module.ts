import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RaizComponent } from './raiz.component';

const routes: Routes = [
  { path: '', component: RaizComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class RaizRoutingModule {
}

export const routedComponents = [ RaizComponent ];
