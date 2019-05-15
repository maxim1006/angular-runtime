import { BrowserModule } from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    public ngDoBootstrap(): void {
        const components = [
            [AppComponent, 'app-root']
        ];

        for (const [component, name] of components) {
            const elm = createCustomElement(component as any, {injector: this.injector});
            customElements.define(name as string, elm);
        }
    }
}
