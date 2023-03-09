import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenttoPage } from './paymentto.page';

const routes: Routes = [
  {
    path: '',
    component: PaymenttoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymenttoPageRoutingModule {}
