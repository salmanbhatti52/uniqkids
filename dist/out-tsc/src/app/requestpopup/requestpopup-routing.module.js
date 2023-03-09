import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestpopupPage } from './requestpopup.page';
const routes = [
    {
        path: '',
        component: RequestpopupPage
    }
];
let RequestpopupPageRoutingModule = class RequestpopupPageRoutingModule {
};
RequestpopupPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RequestpopupPageRoutingModule);
export { RequestpopupPageRoutingModule };
//# sourceMappingURL=requestpopup-routing.module.js.map