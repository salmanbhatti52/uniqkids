import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CaregiverPageRoutingModule } from './caregiver-routing.module';
import { CaregiverPage } from './caregiver.page';
let CaregiverPageModule = class CaregiverPageModule {
};
CaregiverPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CaregiverPageRoutingModule
        ],
        declarations: [CaregiverPage]
    })
], CaregiverPageModule);
export { CaregiverPageModule };
//# sourceMappingURL=caregiver.module.js.map