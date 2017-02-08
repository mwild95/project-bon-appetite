import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from '../modal/modal.module';
import { MenuListComponent }  from './menuList.component';
import { MenuComponent } from './menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule ],
  declarations: [ MenuListComponent, MenuComponent ],
  bootstrap:    [ MenuListComponent ]
})

export class MenuModule { }