import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';
import { ManageModule } from './manage/manage.module';
import { RestaurantsModule } from './restaurants/restaurants.module'; 
import { ModalModule } from './modal/modal.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module'; 

import { UserService } from './services/user.service';
import { RestaurantsService } from './services/restaurants.service';
import { CacheService } from './services/cache.service';
import { ConstantsService } from './services/constants.service';
import { MenuService } from './services/menu.service';
import { RestService } from './services/rest.service';
import { IngredientsService } from './services/ingredients.service';
import { ProductsService } from './services/products.service';
import { SectionsService } from './services/sections.service';
import { OrdersService } from './services/orders.service';

import { CanActivateViaUserService } from './guards/loggedin.guard';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';


 
@NgModule({
  imports:      [ BrowserModule,
  				FormsModule,
  				routing,
  				NavbarModule,
  				ModalModule,
  				DirectivesModule,
  				HttpModule,
  				JsonpModule,
          PipesModule ],
  declarations: [ AppComponent, HomeComponent ],
  providers: 	[ appRoutingProviders,
                UserService,
                CanActivateViaUserService,
                RestaurantsService,
                CacheService,
                MenuService,
                ConstantsService,
                RestService,
                IngredientsService,
                ProductsService,
                SectionsService,
                OrdersService
              ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
	constructor () {
	}
}