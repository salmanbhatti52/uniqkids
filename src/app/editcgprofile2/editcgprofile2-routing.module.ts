import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editcgprofile2Page } from './editcgprofile2.page';

const routes: Routes = [
  {
    path: '',
    component: Editcgprofile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editcgprofile2PageRoutingModule {}
