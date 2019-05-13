import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ButtonElementModule} from './angular-elements/button-element/button-element.module';
import {ButtonElementComponent} from './angular-elements/button-element/button-element.component';
import {createCustomElement} from '@angular/elements';

platformBrowserDynamic()
    .bootstrapModule(ButtonElementModule, {ngZone: 'noop'})
    .then(({injector}) => {
        customElements.define(
            'app-button-element',
            createCustomElement(ButtonElementComponent, {injector})
        );
    })
    .catch(err => console.error(err));
