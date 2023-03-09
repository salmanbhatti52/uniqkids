import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentmessagePage } from './paymentmessage.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentmessagePageRoutingModule {}
