import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material'; 

import { RestaurantsService } from '../services/restaurants.service';

import { ModalModule } from '../modal/modal.module';
import { OrdersComponent }  from './orders.component';
import { PendingOrdersComponent } from './pending/pending.component';
import { CompleteOrdersComponent } from './complete/complete.component';
import { OrdersRestaurantComponent } from './ordersRestaurant.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule, RouterModule, MaterialModule.forRoot(), ],
  declarations: [ OrdersComponent, PendingOrdersComponent, CompleteOrdersComponent, OrdersRestaurantComponent ],
  bootstrap:    [ OrdersComponent ]
})

export class OrdersModule { }