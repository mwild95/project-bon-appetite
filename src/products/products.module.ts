import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from '../modal/modal.module';
import { ProductsListComponent }  from './productsList.component';
import { ProductComponent } from './product.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule ],
  declarations: [ ProductsListComponent, ProductComponent ],
  bootstrap:    [ ProductsListComponent ]
})

export class ProductsModule { }