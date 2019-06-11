import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LibraryLazyComponent} from './library-lazy.component';
import {LibraryTemplateModule} from '../../../../dist/library-template';

const routes: Routes = [
    {path: '', component: LibraryLazyComponent},
];

@NgModule({
    declarations: [LibraryLazyComponent],
    imports: [
        CommonModule,
        LibraryTemplateModule,
        RouterModule.forChild(routes)
    ]
})
export class LibraryLazyModule {
}


// сперва собираю либу, затем делаю ссылку на import {LibraryTemplateModule} from '../../../../dist/library-template';
// в дист
