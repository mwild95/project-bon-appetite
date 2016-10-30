import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsListComponent }  from './productsList.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProductsListComponent ],
  bootstrap:    [ ProductsListComponent ]
})

export class ProductsModule { }