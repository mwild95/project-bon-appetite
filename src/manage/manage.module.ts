import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ManageComponent }  from './manage.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ManageComponent ],
  bootstrap:    [ ManageComponent ]
})

export class ManageModule { }