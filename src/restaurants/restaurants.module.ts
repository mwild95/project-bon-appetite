import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { QRCodeModule } from 'node_modules/angular2-qrcode';

import { ModalModule } from '../modal/modal.module';

import { RestaurantsListComponent }  from './restaurantsList.component';
import { RestaurantComponent } from './restaurant.component';

import { AddRestaurantModalComponent } from './modals/addRestaurantModal.component';
import { MenuPickerModalComponent } from './modals/menuPickerModal.component';
import { DeleteRestaurantModalComponent } from './modals/deleteRestaurantModal.component';
import { AddOpeningTimeModalComponent} from './modals/addOpeningTimeModal.component';
import { AddTableModalComponent } from './modals/addTableModal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule, MaterialModule.forRoot(), QRCodeModule ],
  declarations: [ RestaurantsListComponent,
  RestaurantComponent,
  AddRestaurantModalComponent,
  MenuPickerModalComponent,
  DeleteRestaurantModalComponent,
  AddOpeningTimeModalComponent,
  AddTableModalComponent  
   ],
  bootstrap:    [ RestaurantsListComponent ],
  entryComponents: [ AddRestaurantModalComponent, MenuPickerModalComponent, DeleteRestaurantModalComponent, AddOpeningTimeModalComponent,
  AddTableModalComponent ]
})

export class RestaurantsModule { }