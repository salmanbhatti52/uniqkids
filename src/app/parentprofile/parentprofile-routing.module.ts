import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentprofilePage } from './parentprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ParentprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentprofilePageRoutingModule {}
