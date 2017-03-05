import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { AlertComponent } from './alert.component';
import { ViewChildViewChildrenComponent } from './view-child-view-children.component';
import { ViewChildViewChildrenRoutingModule } from './view-child-view-children-routing.module';


@NgModule({
  imports: [ ViewChildViewChildrenRoutingModule, ShareModule ],
  exports: [],
  declarations: [ ViewChildViewChildrenComponent, AlertComponent ],
  providers: [],
})
export class ViewChildViewChildrenModule {
}
