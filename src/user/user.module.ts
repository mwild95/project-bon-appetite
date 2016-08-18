import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserComponent }  from './user.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ UserComponent ],
  bootstrap:    [ UserComponent ]
})

export class UserModule { }