import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent }  from './login.component';

import { User } from '../user/user';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Router ],
  declarations: [ LoginComponent ],
  bootstrap:    [ LoginComponent ]
})

export class LoginModule { }