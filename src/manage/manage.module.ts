import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ManageComponent }  from './manage.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [ ManageComponent ],
  bootstrap:    [ ManageComponent ]
})

export class ManageModule { }