import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'hello-list',
  template: `
	  <p>Projected content:</p>
    <div>
	    <ng-content></ng-content>
	  </div>
	  <button (click)="onClickAll()">
	    Cores aleatórias Hell
	   </button>
	  <button (click)="onClickLast()">
	    Cor aleatória no ultimo hello
	 </button>`
})
export class HelloListComponent {
  @ContentChildren(HelloComponent) helloChildren: QueryList<HelloComponent>;
  @ContentChild('last') lastChild: HelloComponent;

  constructor() {
  }

  ngAfterContentInit() {
    // Content children now set
    this.onClickAll();
  }

  onClickAll() {
    this.helloChildren.forEach(child => child.randomizeColor());
  }

  onClickLast() {
    this.lastChild.randomizeColor();
  }
}
