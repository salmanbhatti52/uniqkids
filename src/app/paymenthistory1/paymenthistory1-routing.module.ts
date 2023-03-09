import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paymenthistory1Page } from './paymenthistory1.page';

const routes: Routes = [
  {
    path: '',
    component: Paymenthistory1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paymenthistory1PageRoutingModule {}
