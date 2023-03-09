import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Paymenthistory1Page } from './paymenthistory1.page';
const routes = [
    {
        path: '',
        component: Paymenthistory1Page
    }
];
let Paymenthistory1PageRoutingModule = class Paymenthistory1PageRoutingModule {
};
Paymenthistory1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Paymenthistory1PageRoutingModule);
export { Paymenthistory1PageRoutingModule };
//# sourceMappingURL=paymenthistory1-routing.module.js.map