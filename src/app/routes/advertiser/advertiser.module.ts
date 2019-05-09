import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdvertiserRoutingModule } from './advertiser-routing.module';
import { AdvertiserListComponent } from './list/list.component';
import { AdvertiserListEditComponent } from './list/edit/edit.component';
import { AdvertiserListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  AdvertiserListComponent];
const COMPONENTS_NOROUNT = [
  AdvertiserListEditComponent,
  AdvertiserListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    AdvertiserRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class AdvertiserModule { }
