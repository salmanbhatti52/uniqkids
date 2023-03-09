import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cgprofile1Page } from './cgprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Cgprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cgprofile1PageRoutingModule {}
