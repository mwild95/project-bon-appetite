import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';
import { ManageModule } from './manage/manage.module';
import { RestaurantsModule } from './restaurants/restaurants.module'; 
import { ModalModule } from './modal/modal.module';

import { UserService } from './services/user.service';
import { RestaurantsService } from './services/restaurants.service';
import { CacheService } from './services/cache.service';
import { MenuService } from './services/menu.service';

import { CanActivateViaUserService } from './guards/loggedin.guard';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';


 
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, NavbarModule, ModalModule ],
  declarations: [ AppComponent, HomeComponent ],
  providers: 	[ appRoutingProviders, UserService, CanActivateViaUserService, RestaurantsService, CacheService, MenuService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
	constructor () {
	}
}