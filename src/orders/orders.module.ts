import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from '../modal/modal.module';
import { OrdersComponent }  from './orders.component';
import { PendingOrdersComponent } from './pending/pending.component';
import { CompleteOrdersComponent } from './complete/complete.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule, RouterModule],
  declarations: [ OrdersComponent, PendingOrdersComponent, CompleteOrdersComponent ],
  bootstrap:    [ OrdersComponent ]
})

export class OrdersModule { }