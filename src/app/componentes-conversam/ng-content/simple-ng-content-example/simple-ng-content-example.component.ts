import { Component } from '@angular/core';

@Component({
  selector: 'simple-ng-content-example',
  template: '<meu-componente-pesquisa><meu-botao-pesquisa></meu-botao-pesquisa></meu-componente-pesquisa>'
})
export class SimpleNgContentExampleComponent {

// <input type="text"><b><a href="https://www.youtube.com/channel/UCWHLFYc-15QhCyj5-FV5oPw">PESQUISAR</a></b>

  /**
    ```
   <simple-ng-content-example>
    <meu-componente-pesquisa>
      <input type="text">
        <b>
          <meu-botao-pesquisa>
          <a href="https://www.youtube.com/channel/UCWHLFYc-15QhCyj5-FV5oPw">PESQUISAR</a>
          </meu-botao-pesquisa>
        </b>
       </meu-componente-pesquisa>
    </simple-ng-content-example>
   ```
   */
}