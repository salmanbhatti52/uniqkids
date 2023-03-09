import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentmessagePageRoutingModule } from './paymentmessage-routing.module';

import { PaymentmessagePage } from './paymentmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentmessagePageRoutingModule
  ],
  declarations: [PaymentmessagePage]
})
export class PaymentmessagePageModule {}
