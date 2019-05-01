import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeListEditComponent } from './list/edit/edit.component';
import { EmployeeListViewComponent } from './list/view/view.component';
import { CustomInterceptor } from './CustomHttpInterceptors';

const COMPONENTS = [
  EmployeeListComponent];
const COMPONENTS_NOROUNT = [
  EmployeeListEditComponent,
  EmployeeListViewComponent];

@NgModule({ 
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class EmployeeModule { }
