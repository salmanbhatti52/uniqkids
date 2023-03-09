import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymenttoPageRoutingModule } from './paymentto-routing.module';

import { PaymenttoPage } from './paymentto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymenttoPageRoutingModule
  ],
  declarations: [PaymenttoPage]
})
export class PaymenttoPageModule {}
