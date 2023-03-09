import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordPage } from './forgotpassword.page';
let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ForgotpasswordPageRoutingModule
        ],
        declarations: [ForgotpasswordPage]
    })
], ForgotpasswordPageModule);
export { ForgotpasswordPageModule };
//# sourceMappingURL=forgotpassword.module.js.map