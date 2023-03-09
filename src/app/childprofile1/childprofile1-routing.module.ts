import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Childprofile1Page } from './childprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Childprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Childprofile1PageRoutingModule {}
