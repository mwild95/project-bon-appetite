import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';
import { ManageModule } from './manage/manage.module';
import { RestaurantsModule } from './restaurants/restaurants.module'; 
import { ModalModule } from './modal/modal.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module'; 
import { DashboardModule } from './dashboard/dashboard.module'; 
import { MenuModule } from './menus/menu.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ProductsModule } from './products/products.module';
import { SectionsModule } from './sections/sections.module';
import { OrdersModule } from './orders/orders.module';
import { GeneralModule } from './general/general.module';

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
import { ImagesService } from './services/images.service';
import { ErrorService } from './services/error.service';
import { CanActivateViaUserService } from './guards/loggedin.guard';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ErrorDialog } from './services/error.service'; 


 
@NgModule({
  imports:      [ BrowserModule,
  				FormsModule,
  				routing,
  				NavbarModule,
  				ModalModule,
  				DirectivesModule,
  				HttpModule,
  				JsonpModule,
          PipesModule,
          UserModule,
          LoginModule,
          NavbarModule,
          ManageModule,
          RestaurantsModule,
          ModalModule,
          DirectivesModule,
          PipesModule,
          DashboardModule,
          MenuModule,
          IngredientsModule,
          ProductsModule ,
          SectionsModule,
          OrdersModule,
          GeneralModule,
          MaterialModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, ErrorDialog ],
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
                OrdersService,
                ImagesService,
                ErrorService
              ],
  entryComponents: [ErrorDialog],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
	constructor () {
	}
}