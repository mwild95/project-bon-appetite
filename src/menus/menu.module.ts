import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuListComponent }  from './menuList.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MenuListComponent ],
  bootstrap:    [ MenuListComponent ]
})

export class MenuModule { }