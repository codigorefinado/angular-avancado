import { NgModule } from '@angular/core';

import { ContentChildChildrenComponent } from './content-child-children.component';
import { ContentChildChildrenRoutingModule } from './content-child-children-routing.module';
import { ShareModule } from '../../share/share.module';
import { HelloListComponent } from './hello-list.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ ContentChildChildrenRoutingModule, ShareModule ],
  exports: [],
  declarations: [ ContentChildChildrenComponent, HelloComponent, HelloListComponent ],
  providers: [],
})
export class ContentChildChildrenModule {
}
