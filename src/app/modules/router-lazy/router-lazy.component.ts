import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-lazy',
    template: `Hello from router lazy module!`
})

export class RouterLazyComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
