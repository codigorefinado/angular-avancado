import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { NivelDoisAComponentModule } from './nivel-um/nivel-dois-a/nivel-dois-a.module';
import { RaizRoutingModule } from './raiz-routing.module';

import { RaizComponent } from './raiz.component';
import { RaizService } from './raiz.service';

@NgModule({
  imports: [ ShareModule, RaizRoutingModule, NivelDoisAComponentModule ],
  exports: [],
  declarations: [ RaizComponent ],
  providers: [ RaizService ],
})
export class RaizModule {
}
