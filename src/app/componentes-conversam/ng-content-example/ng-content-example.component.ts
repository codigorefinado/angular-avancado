import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-content-example',
  template: `
<!--
<div style="border: 1px solid blue; padding: 1rem;">
      <h4>Child Component</h4>
      <ng-content></ng-content>
</div>
-->
      <div style="border: 2px solid black; padding: 1rem;">
        <h4>App Component</h4>
        <child-select>
          <section>Section Content</section>
          <div class="class-select">
            div with .class-select
          </div>
          <footer>Footer Content</footer>
          <header>Header Content</header>
        </child-select>
      </div>`
})
export class NgContentExampleComponent  {


}



