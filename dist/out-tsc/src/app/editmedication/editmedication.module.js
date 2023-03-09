import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditmedicationPageRoutingModule } from './editmedication-routing.module';
import { EditmedicationPage } from './editmedication.page';
let EditmedicationPageModule = class EditmedicationPageModule {
};
EditmedicationPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditmedicationPageRoutingModule
        ],
        declarations: [EditmedicationPage]
    })
], EditmedicationPageModule);
export { EditmedicationPageModule };
//# sourceMappingURL=editmedication.module.js.map