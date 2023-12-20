import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';

const routes : Routes = [
  {
    path:':method/:param',
    component:IndexComponent
  },
  {
    path:'',
    component:IndexComponent
  }
]

@NgModule({
  declarations: [
    IndexComponent,
    CategorylistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BrowserModule { }
