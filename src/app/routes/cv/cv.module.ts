import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CvRoutingModule } from './cv-routing.module';
import { CvListComponent } from './list/list.component';
import { CvListEditComponent } from './list/edit/edit.component';
import { CvListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  CvListComponent];
const COMPONENTS_NOROUNT = [
  CvListEditComponent,
  CvListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    CvRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class CvModule { }
