import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-library-template',
  template: `
    <p>
        Hello from library module!
    </p>
  `,
  styles: []
})
export class LibraryTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
