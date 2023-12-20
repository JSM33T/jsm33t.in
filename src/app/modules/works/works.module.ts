import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ViewerComponent } from './viewer/viewer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'work/:slug',
    component: ViewerComponent
  }
]


@NgModule({
  declarations: [
    IndexComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule { }
