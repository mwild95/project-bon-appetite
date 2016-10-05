import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal';
import { ModalHeaderComponent } from './modal-header';
import { ModalBodyComponent } from './modal-body';
import { ModalFooterComponent } from './modal-footer';
//import { AutofocusDirective } from './autofocus';

export * from './modal';
export * from './modal-header';
export * from './modal-body';
export * from './modal-footer';
export * from './modal-instance';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent,
        ModalHeaderComponent,
        ModalBodyComponent,
        ModalFooterComponent
        //AutofocusDirective
    ],
    exports: [
        ModalComponent,
        ModalHeaderComponent,
        ModalBodyComponent,
        ModalFooterComponent
        //AutofocusDirective
    ]
})
export class ModalModule {
}