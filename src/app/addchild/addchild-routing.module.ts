import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddchildPage } from './addchild.page';

const routes: Routes = [
  {
    path: '',
    component: AddchildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddchildPageRoutingModule {}
