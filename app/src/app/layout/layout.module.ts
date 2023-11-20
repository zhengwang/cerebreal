import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { InputComponent } from './component/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    MainComponent,
    CardComponent,
    ModalComponent,
    HeaderComponent,
    SidebarComponent,
    PagetitleComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthComponent,
    InputComponent,
    CardComponent,
    MainComponent,
    ModalComponent,
    PagetitleComponent
  ]
})
export class LayoutModule { }
