import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CgviewprofilePageRoutingModule } from './cgviewprofile-routing.module';
import { CgviewprofilePage } from './cgviewprofile.page';
let CgviewprofilePageModule = class CgviewprofilePageModule {
};
CgviewprofilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CgviewprofilePageRoutingModule
        ],
        declarations: [CgviewprofilePage]
    })
], CgviewprofilePageModule);
export { CgviewprofilePageModule };
//# sourceMappingURL=cgviewprofile.module.js.map