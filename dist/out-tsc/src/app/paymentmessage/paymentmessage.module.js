import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentmessagePageRoutingModule } from './paymentmessage-routing.module';
import { PaymentmessagePage } from './paymentmessage.page';
let PaymentmessagePageModule = class PaymentmessagePageModule {
};
PaymentmessagePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentmessagePageRoutingModule
        ],
        declarations: [PaymentmessagePage]
    })
], PaymentmessagePageModule);
export { PaymentmessagePageModule };
//# sourceMappingURL=paymentmessage.module.js.map