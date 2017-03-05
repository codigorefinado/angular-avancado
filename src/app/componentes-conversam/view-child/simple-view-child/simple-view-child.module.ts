import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { SimpleViewChildComponent } from './simple-view-child.component';
import { AlertComponent } from './alert.component';
import { SimpleViewChildRoutingModule } from './simple-view-child-routing.module';


@NgModule({
  imports: [ SimpleViewChildRoutingModule, ShareModule ],
  exports: [],
  declarations: [ SimpleViewChildComponent, AlertComponent ],
  providers: [],
})
export class SimpleViewChildModule {
}
