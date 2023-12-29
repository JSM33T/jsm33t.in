import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: ShowcaseComponent
  }
]


@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule { }
