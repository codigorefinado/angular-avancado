import { NgModule } from '@angular/core';
import { SimpleNgContentExampleComponent } from './simple-ng-content-example.component';
import { SimpleNgContentExampleRoutingModule } from './simple-ng-content-example-routing.module';
import { MeuBotaoPesquisaComponent } from './meu-botao-pesquisa.component';
import { MeuComponentePsquisaComponent } from './meu-componente-pesquisa.component';
import { ShareModule } from '../../../share/share.module';


@NgModule({
  imports: [ SimpleNgContentExampleRoutingModule, ShareModule ],
  exports: [],
  declarations: [ SimpleNgContentExampleComponent, MeuBotaoPesquisaComponent, MeuComponentePsquisaComponent ],
  providers: [],
})
export class SimpleNgContentExampleModule {
}
