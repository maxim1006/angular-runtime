import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'router-lazy', loadChildren: './modules/router-lazy/router-lazy.module#RouterLazyModule'},
    {path: 'library-lazy', loadChildren: './modules/library-lazy/library-lazy.module#LibraryLazyModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
