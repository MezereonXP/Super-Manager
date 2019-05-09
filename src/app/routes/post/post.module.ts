import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './list/list.component';
import { PostListEditComponent } from './list/edit/edit.component';
import { PostListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  PostListComponent];
const COMPONENTS_NOROUNT = [
  PostListEditComponent,
  PostListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    PostRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class PostModule { }
