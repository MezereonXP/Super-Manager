import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdvertiseRoutingModule } from './advertise-routing.module';
import { AdvertiseListComponent } from './list/list.component';
import { AdvertiseListEditComponent } from './list/edit/edit.component';
import { AdvertiseListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  AdvertiseListComponent];
const COMPONENTS_NOROUNT = [
  AdvertiseListEditComponent,
  AdvertiseListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    AdvertiseRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class AdvertiseModule { }
