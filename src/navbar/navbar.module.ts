import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { NavbarComponent }  from './navbar.component';

 
@NgModule({
  imports:      [ RouterModule, BrowserModule ],
  declarations: [ NavbarComponent ],
  providers: 	[ ],
  exports:		[ NavbarComponent ],
  bootstrap:    [ ]
})

export class NavbarModule { }