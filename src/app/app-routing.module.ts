import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/signup-form/signup-form.module#SignupFormModule'
      },
      {
        path: 'content-child-children',
        loadChildren: 'app/componentes-conversam/content-child-children/content-child-children.module#ContentChildChildrenModule'
      }

    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
