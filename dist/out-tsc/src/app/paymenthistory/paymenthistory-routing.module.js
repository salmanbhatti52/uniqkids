import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymenthistoryPage } from './paymenthistory.page';
const routes = [
    {
        path: '',
        component: PaymenthistoryPage
    }
];
let PaymenthistoryPageRoutingModule = class PaymenthistoryPageRoutingModule {
};
PaymenthistoryPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymenthistoryPageRoutingModule);
export { PaymenthistoryPageRoutingModule };
//# sourceMappingURL=paymenthistory-routing.module.js.map