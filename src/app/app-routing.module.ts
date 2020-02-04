import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GETComponent } from './get/get.component';
import { POSTComponent } from './post/post.component'


const routes: Routes = [
  {
    path : 'get',
    component : GETComponent
  },
  {
    path : 'post',
    component : POSTComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
