import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetpasswordPage } from './resetpassword.page';
const routes = [
    {
        path: '',
        component: ResetpasswordPage
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ResetpasswordPageRoutingModule);
export { ResetpasswordPageRoutingModule };
//# sourceMappingURL=resetpassword-routing.module.js.map