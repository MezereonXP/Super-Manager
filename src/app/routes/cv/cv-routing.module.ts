import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: CvListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
