import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticV1Component } from './v1/v1.component';

const COMPONENTS = [
  StatisticV1Component
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    StatisticRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class StatisticModule { }
