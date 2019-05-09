import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: PostListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
