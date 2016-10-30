import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SectionsListComponent }  from './sectionsList.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SectionsListComponent ],
  bootstrap:    [ SectionsListComponent ]
})

export class SectionsModule { }