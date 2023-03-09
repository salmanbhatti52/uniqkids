import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymenttoPageRoutingModule } from './paymentto-routing.module';
import { PaymenttoPage } from './paymentto.page';
let PaymenttoPageModule = class PaymenttoPageModule {
};
PaymenttoPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymenttoPageRoutingModule
        ],
        declarations: [PaymenttoPage]
    })
], PaymenttoPageModule);
export { PaymenttoPageModule };
//# sourceMappingURL=paymentto.module.js.map