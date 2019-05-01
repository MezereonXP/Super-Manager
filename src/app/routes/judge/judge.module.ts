import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { JudgeRoutingModule } from './judge-routing.module';
import { JudgeListComponent } from './list/list.component';
import { JudgeListEditComponent } from './list/edit/edit.component';
import { JudgeListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  JudgeListComponent];
const COMPONENTS_NOROUNT = [
  JudgeListEditComponent,
  JudgeListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    JudgeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class JudgeModule { }
