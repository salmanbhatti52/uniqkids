import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CgsignupPage } from './cgsignup.page';
const routes = [
    {
        path: '',
        component: CgsignupPage
    }
];
let CgsignupPageRoutingModule = class CgsignupPageRoutingModule {
};
CgsignupPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CgsignupPageRoutingModule);
export { CgsignupPageRoutingModule };
//# sourceMappingURL=cgsignup-routing.module.js.map