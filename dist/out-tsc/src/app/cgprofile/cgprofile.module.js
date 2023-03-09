import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CgprofilePageRoutingModule } from './cgprofile-routing.module';
import { CgprofilePage } from './cgprofile.page';
let CgprofilePageModule = class CgprofilePageModule {
};
CgprofilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CgprofilePageRoutingModule
        ],
        declarations: [CgprofilePage]
    })
], CgprofilePageModule);
export { CgprofilePageModule };
//# sourceMappingURL=cgprofile.module.js.map