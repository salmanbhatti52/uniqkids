import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OtpPage } from './otp.page';
const routes = [
    {
        path: '',
        component: OtpPage
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OtpPageRoutingModule);
export { OtpPageRoutingModule };
//# sourceMappingURL=otp-routing.module.js.map