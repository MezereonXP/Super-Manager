import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemindBirthComponent } from './birth/birth.component';
import { RemindContractComponent } from './contract/contract.component';

const routes: Routes = [

  { path: 'birth', component: RemindBirthComponent },
  { path: 'contract', component: RemindContractComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemindRoutingModule { }
