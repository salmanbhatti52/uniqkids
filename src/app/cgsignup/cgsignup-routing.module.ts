import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CgsignupPage } from './cgsignup.page';

const routes: Routes = [
  {
    path: '',
    component: CgsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CgsignupPageRoutingModule {}
