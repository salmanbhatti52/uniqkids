import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CgviewprofilePage } from './cgviewprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CgviewprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CgviewprofilePageRoutingModule {}
