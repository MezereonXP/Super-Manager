import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertiseListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: AdvertiseListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertiseRoutingModule { }
