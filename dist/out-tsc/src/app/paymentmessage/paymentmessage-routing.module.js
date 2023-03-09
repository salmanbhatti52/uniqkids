import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentmessagePage } from './paymentmessage.page';
const routes = [
    {
        path: '',
        component: PaymentmessagePage
    }
];
let PaymentmessagePageRoutingModule = class PaymentmessagePageRoutingModule {
};
PaymentmessagePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymentmessagePageRoutingModule);
export { PaymentmessagePageRoutingModule };
//# sourceMappingURL=paymentmessage-routing.module.js.map