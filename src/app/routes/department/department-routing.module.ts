import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: DepartmentListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
