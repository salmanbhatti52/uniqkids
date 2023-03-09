import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentprofileviewPage } from './parentprofileview.page';

const routes: Routes = [
  {
    path: '',
    component: ParentprofileviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentprofileviewPageRoutingModule {}
