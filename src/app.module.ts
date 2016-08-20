import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

import { AppComponent }  from './app.component';
 
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent ],
  providers: 	[ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }