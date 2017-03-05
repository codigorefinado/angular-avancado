import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <hello-list>
	    <hello-world name="World"></hello-world>
	    <hello-world name="Other World"></hello-world>
	    
	    <hello-world #last name="Last World"></hello-world>
	  </hello-list>
	  <p>Calls function on child component classes to randomize color of them.</p>`
})
export class ContentChildChildrenComponent {
  constructor() {
  }
}
