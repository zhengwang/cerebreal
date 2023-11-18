import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RoutingModule,
  ]
})
export class DashboardModule { }
