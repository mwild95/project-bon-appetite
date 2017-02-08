import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { PageNotFoundComponent }  from './pagenotfound.component';

 
@NgModule({
  imports:      [ RouterModule, BrowserModule ],
  declarations: [ PageNotFoundComponent ],
  providers: 	[ ],
  exports:		[ PageNotFoundComponent ],
  bootstrap:    [ ]
})

export class GeneralModule { }