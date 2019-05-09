import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticV1Component } from './v1/v1.component';

const routes: Routes = [
  { path: 'show', component: StatisticV1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
