import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymenttoPage } from './paymentto.page';
const routes = [
    {
        path: '',
        component: PaymenttoPage
    }
];
let PaymenttoPageRoutingModule = class PaymenttoPageRoutingModule {
};
PaymenttoPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymenttoPageRoutingModule);
export { PaymenttoPageRoutingModule };
//# sourceMappingURL=paymentto-routing.module.js.map