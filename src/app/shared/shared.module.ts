import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [CommonModule, IonicModule, FormsModule, FlexLayoutModule, ReactiveFormsModule, TranslateModule]
})
export class SharedModule {
}
