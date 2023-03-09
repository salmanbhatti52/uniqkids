import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cgviewprofile1Page } from './cgviewprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Cgviewprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cgviewprofile1PageRoutingModule {}
