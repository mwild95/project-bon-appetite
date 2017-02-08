import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from '../modal/modal.module';
import { IngredientListComponent }  from './ingredientList.component';
import { IngredientComponent } from './ingredient.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule ],
  declarations: [ IngredientListComponent, IngredientComponent ],
  bootstrap:    [ IngredientListComponent ]
})

export class IngredientsModule { }