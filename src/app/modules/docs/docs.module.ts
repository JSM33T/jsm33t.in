import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangelogComponent } from './changelog/changelog.component';
import { FaqComponent } from './faq/faq.component';
import { AttributionsComponent } from './attributions/attributions.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';


const routes : Routes = [
  {
    path:'changelog',
    component: ChangelogComponent
  },
  {
    path:'attributions',
    component: AttributionsComponent
  },
  {
    path:'faq',
    component:FaqComponent
  }
]

@NgModule({
  declarations: [
    ChangelogComponent,
    FaqComponent,
    AttributionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[ApiserviceService]
})
export class DocsModule { }
