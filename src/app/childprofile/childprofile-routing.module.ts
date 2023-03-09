import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildprofilePage } from './childprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ChildprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildprofilePageRoutingModule {}
