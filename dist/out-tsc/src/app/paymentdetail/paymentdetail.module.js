import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentdetailPageRoutingModule } from './paymentdetail-routing.module';
import { PaymentdetailPage } from './paymentdetail.page';
let PaymentdetailPageModule = class PaymentdetailPageModule {
};
PaymentdetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentdetailPageRoutingModule
        ],
        declarations: [PaymentdetailPage]
    })
], PaymentdetailPageModule);
export { PaymentdetailPageModule };
//# sourceMappingURL=paymentdetail.module.js.map