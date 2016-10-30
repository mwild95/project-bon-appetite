import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IngredientListComponent }  from './ingredientList.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ IngredientListComponent ],
  bootstrap:    [ IngredientListComponent ]
})

export class IngredientsModule { }