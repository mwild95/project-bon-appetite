import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

import { AppComponent }  from './app.component';
 
@NgModule({
  imports:      [ BrowserModule, LoginModule, UserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }