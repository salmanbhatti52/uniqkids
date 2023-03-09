import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsandconditionPage } from './termsandcondition.page';
const routes = [
    {
        path: '',
        component: TermsandconditionPage
    }
];
let TermsandconditionPageRoutingModule = class TermsandconditionPageRoutingModule {
};
TermsandconditionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TermsandconditionPageRoutingModule);
export { TermsandconditionPageRoutingModule };
//# sourceMappingURL=termsandcondition-routing.module.js.map