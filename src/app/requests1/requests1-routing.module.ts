import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Requests1Page } from './requests1.page';

const routes: Routes = [
  {
    path: '',
    component: Requests1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Requests1PageRoutingModule {}
