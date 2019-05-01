import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RemindRoutingModule } from './remind-routing.module';
import { RemindBirthComponent } from './birth/birth.component';
import { RemindBirthEditComponent } from './birth/edit/edit.component';
import { RemindBirthViewComponent } from './birth/view/view.component';
import { RemindContractComponent } from './contract/contract.component';
import { RemindContractEditComponent } from './contract/edit/edit.component';
import { RemindContractViewComponent } from './contract/view/view.component';

const COMPONENTS = [
  RemindBirthComponent,
  RemindContractComponent];
const COMPONENTS_NOROUNT = [
  RemindBirthEditComponent,
  RemindBirthViewComponent,
  RemindContractEditComponent,
  RemindContractViewComponent];

@NgModule({
  imports: [
    SharedModule,
    RemindRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RemindModule { }
