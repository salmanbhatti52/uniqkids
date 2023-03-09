import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaymentPage } from './payment.page';
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentPageRoutingModule
        ],
        declarations: [PaymentPage]
    })
], PaymentPageModule);
export { PaymentPageModule };
//# sourceMappingURL=payment.module.js.map