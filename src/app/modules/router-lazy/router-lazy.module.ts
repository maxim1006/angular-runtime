import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RouterLazyComponent} from './router-lazy.component';

const routes: Routes = [
    {path: '', component: RouterLazyComponent},
];

@NgModule({
  declarations: [RouterLazyComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RouterLazyModule { }
