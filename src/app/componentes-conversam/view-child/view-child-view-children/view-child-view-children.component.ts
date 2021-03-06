import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-root',
  template: `
    <app-alert #first ok="Próximo" (close)="showAlert(2)">
      Passo 1: Aprenda angular - <a href="http://aprendaangular.com">http://aprendaangular.com</a>
    </app-alert>
    
    <app-alert ok="Próximo" (close)="showAlert(3)">
      Passo 2: Leia o código refinado <a href="http://medium.com/codigorefinado">http://medium.com/codigorefinado</a>
    </app-alert>
    
    <app-alert ok="Fechar">
      Step 3: Inscreva-se no <a href="https://www.youtube.com/channel/UCWHLFYc-15QhCyj5-FV5oPw">canal código refinado no youtube</a>
    </app-alert>
    
	  <button (click)="showAlert(1)">Mostrar os passos</button>`
})
export class ViewChildViewChildrenComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('first') alert: AlertComponent; //@ViewChild and template #refs

  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;

  alertsArr = [];

  /**
   * https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#afterview
   The following hooks take action based on changing values within the child view which can only be
   reached by querying for the child view via the property decorated with @ViewChild.
   */
  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }

  ngAfterViewChecked() {
    /**
     * Poderia, por exemplo, pegar a um objeto dentro do filho e trazer para dentro deste componente aqui.
     */
  }

  showAlert(step: any) {
    this.alertsArr[ step - 1 ].show(); // step 1 is alert index 0
  }
}