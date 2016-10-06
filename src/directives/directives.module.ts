import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { forceFocus } from './forcefocus.directive';
 
export * from './forcefocus.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ forceFocus ],
  exports:		[ forceFocus ],
  providers: 	[ ],
  bootstrap:    [ ]
})

export class DirectivesModule { 
	constructor () {
	}
}