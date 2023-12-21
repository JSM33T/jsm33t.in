import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'works',
    loadChildren: () => import('./modules/works/works.module').then((m) => m.WorksModule),
  },

  {
    path: 'blogs',
    loadChildren: () => import('./modules/blogs/browser/browser.module').then((m) => m.BrowserModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blogs/viewer/viewer.module').then((m) => m.ViewerModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  // Add more routes as needed
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
