import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    exports: [CommonModule, IonicModule, FormsModule, FlexLayoutModule, ReactiveFormsModule]
})
export class SharedModule {
}
