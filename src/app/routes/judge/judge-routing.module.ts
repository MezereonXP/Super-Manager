import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JudgeListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: JudgeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JudgeRoutingModule { }
