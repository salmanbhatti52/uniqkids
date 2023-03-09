import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cgprofile2Page } from './cgprofile2.page';

const routes: Routes = [
  {
    path: '',
    component: Cgprofile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cgprofile2PageRoutingModule {}
