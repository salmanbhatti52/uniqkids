import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestpopupPage } from './requestpopup.page';

const routes: Routes = [
  {
    path: '',
    component: RequestpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestpopupPageRoutingModule {}
