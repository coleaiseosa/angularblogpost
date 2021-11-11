import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogComponent} from './components/dashboard/blog/blog.component'
import {BlogDashboardComponent} from './layout/blog-dashboard/blog-dashboard.component'

const routes: Routes = [
  {
    path: "blog",
    component: BlogDashboardComponent,
    children: [
      {
        path: '',
        component: BlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
