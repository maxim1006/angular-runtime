import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'external-angular-elements';

    isLoading: boolean;

    _click(event) {
        this.isLoading = !this.isLoading;
        console.log(event);
    }
}
