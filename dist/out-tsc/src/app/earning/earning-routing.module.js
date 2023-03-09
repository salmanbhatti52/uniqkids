import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EarningPage } from './earning.page';
const routes = [
    {
        path: '',
        component: EarningPage
    }
];
let EarningPageRoutingModule = class EarningPageRoutingModule {
};
EarningPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EarningPageRoutingModule);
export { EarningPageRoutingModule };
//# sourceMappingURL=earning-routing.module.js.map