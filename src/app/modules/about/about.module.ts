import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes= [
  {
    path:'',
    component: IndexComponent
  }
]

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    IndexComponent
  ]
})
export class AboutModule { }
