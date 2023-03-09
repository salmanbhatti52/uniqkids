import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OtpPageRoutingModule } from './otp-routing.module';
import { OtpPage } from './otp.page';
let OtpPageModule = class OtpPageModule {
};
OtpPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OtpPageRoutingModule
        ],
        declarations: [OtpPage]
    })
], OtpPageModule);
export { OtpPageModule };
//# sourceMappingURL=otp.module.js.map