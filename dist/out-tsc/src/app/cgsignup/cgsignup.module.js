import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CgsignupPageRoutingModule } from './cgsignup-routing.module';
import { CgsignupPage } from './cgsignup.page';
let CgsignupPageModule = class CgsignupPageModule {
};
CgsignupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CgsignupPageRoutingModule
        ],
        declarations: [CgsignupPage]
    })
], CgsignupPageModule);
export { CgsignupPageModule };
//# sourceMappingURL=cgsignup.module.js.map