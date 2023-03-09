import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentdetailPage } from './paymentdetail.page';
const routes = [
    {
        path: '',
        component: PaymentdetailPage
    }
];
let PaymentdetailPageRoutingModule = class PaymentdetailPageRoutingModule {
};
PaymentdetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymentdetailPageRoutingModule);
export { PaymentdetailPageRoutingModule };
//# sourceMappingURL=paymentdetail-routing.module.js.map