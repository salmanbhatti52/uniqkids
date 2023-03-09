import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymenthistoryPageRoutingModule } from './paymenthistory-routing.module';
import { PaymenthistoryPage } from './paymenthistory.page';
let PaymenthistoryPageModule = class PaymenthistoryPageModule {
};
PaymenthistoryPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymenthistoryPageRoutingModule
        ],
        declarations: [PaymenthistoryPage]
    })
], PaymenthistoryPageModule);
export { PaymenthistoryPageModule };
//# sourceMappingURL=paymenthistory.module.js.map