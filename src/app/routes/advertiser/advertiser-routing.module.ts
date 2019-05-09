import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertiserListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'list', component: AdvertiserListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertiserRoutingModule { }
