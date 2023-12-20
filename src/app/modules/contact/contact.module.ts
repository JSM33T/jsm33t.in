import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path : '',
    component: MessageComponent
  }
]

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    FormsModule,
  ],
  providers: [ApiserviceService],
})
export class ContactModule { }
