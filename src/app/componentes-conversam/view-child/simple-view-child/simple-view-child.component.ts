import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'simple-view-child',
  template: `
    <alert-component>Meu alerta</alert-component>
	  <button (click)="showAlert()">Mostrar Alerta</button>`
})
export class SimpleViewChildComponent {
  @ViewChild(AlertComponent) alert: AlertComponent;

  showAlert() {
    this.alert.show();
  }
}