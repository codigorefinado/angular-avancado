import { NgModule } from '@angular/core';
import { NgContentExampleRoutingModule } from './ng-content-example-rouring.module';
import { NgContentExampleComponent } from './ng-content-example.component';
import { ShareModule } from '../../share/share.module';
import { ChildSelectComponent } from './child-select.component';

@NgModule({
  imports: [ NgContentExampleRoutingModule, ShareModule ],
  exports: [],
  declarations: [ NgContentExampleComponent, ChildSelectComponent ],
  providers: [],
})
export class NgContentExampleModule {
}
