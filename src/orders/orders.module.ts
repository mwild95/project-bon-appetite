import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OrdersComponent }  from './orders.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ OrdersComponent ],
  bootstrap:    [ OrdersComponent ]
})

export class OrdersModule { }