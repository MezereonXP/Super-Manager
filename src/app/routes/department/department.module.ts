import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './list/list.component';
import { DepartmentListEditComponent } from './list/edit/edit.component';
import { DepartmentListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  DepartmentListComponent];
const COMPONENTS_NOROUNT = [
  DepartmentListEditComponent,
  DepartmentListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    DepartmentRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DepartmentModule { }
