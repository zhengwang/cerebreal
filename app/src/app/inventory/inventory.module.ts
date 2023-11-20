import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '../layout/layout.module';
import { NewfilmComponent } from './newfilm/newfilm.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    NewfilmComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
