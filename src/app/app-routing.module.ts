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
        loadChildren: 'app/componentes-conversam/ng-content/simple-ng-content-example/simple-ng-content-example.module#SimpleNgContentExampleModule'
      },

      {
        path: 'ng-content-example',
        loadChildren: 'app/componentes-conversam/ng-content/ng-content-example/ng-content-example.module#NgContentExampleModule'
      },
      {
        path: 'simple-view-child',
        loadChildren: 'app/componentes-conversam/view-child/simple-view-child/simple-view-child.module#SimpleViewChildModule'
      },
      {
        path: 'view-child-view-children',
        loadChildren: 'app/componentes-conversam/view-child/view-child-view-children/view-child-view-children.module#ViewChildViewChildrenModule'
      },
      {
        path: 'content-child-children',
        loadChildren: 'app/componentes-conversam/content-child/content-child-children/content-child-children.module#ContentChildChildrenModule'
      }

    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
