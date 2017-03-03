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
        path: 'simple-ng-content-example',
        loadChildren: 'app/componentes-conversam/simple-ng-content-example/simple-ng-content-example.module#SimpleNgContentExampleModule'
      },
      {
        path: 'ng-content-example',
        loadChildren: 'app/componentes-conversam/ng-content-example/ng-content-example.module#NgContentExampleModule'
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
