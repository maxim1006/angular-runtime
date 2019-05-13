import {NgModule} from '@angular/core';
import {ButtonElementComponent} from './button-element.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    exports: [
        ButtonElementComponent
    ],
    declarations: [ButtonElementComponent],
    providers: [],
    entryComponents: [ButtonElementComponent]
})
export class ButtonElementModule {
    ngDoBootstrap() {}
}
