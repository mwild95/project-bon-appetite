import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RestaurantsListComponent }  from './restaurantsList.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ RestaurantsListComponent ],
  bootstrap:    [ RestaurantsListComponent ]
})

export class RestaurantsModule { }