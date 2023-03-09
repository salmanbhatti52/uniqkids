import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CgprofilePage } from './cgprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CgprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CgprofilePageRoutingModule {}
