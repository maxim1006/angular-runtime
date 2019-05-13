import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-library-lazy',
    template: `<lib-library-template></lib-library-template>`
})

export class LibraryLazyComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
