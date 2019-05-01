import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentListComponent } from './list/list.component';
import { AssessmentListEditComponent } from './list/edit/edit.component';
import { AssessmentListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  AssessmentListComponent];
const COMPONENTS_NOROUNT = [
  AssessmentListEditComponent,
  AssessmentListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    AssessmentRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class AssessmentModule { }
