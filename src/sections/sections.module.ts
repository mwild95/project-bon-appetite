import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from '../modal/modal.module';
import { SectionsListComponent }  from './sectionsList.component';
import { SectionComponent } from './section.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule ],
  declarations: [ SectionsListComponent, SectionComponent ],
  bootstrap:    [ SectionsListComponent ]
})

export class SectionsModule { }