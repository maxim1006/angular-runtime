import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loadRouterFreeModule: boolean;

    title = 'angular-runtime';

    _click(event: Event) {
        event.preventDefault();
        this.loadRouterFreeModule = true;
    }
}
