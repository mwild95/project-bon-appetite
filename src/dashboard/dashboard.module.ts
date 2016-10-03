import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }  from './dashboard.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';
 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DashboardComponent ],
  providers:	[ CanActivateViaUserService ],
  bootstrap:    [ DashboardComponent ]
})

export class DashboardModule { }