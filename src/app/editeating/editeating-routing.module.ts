import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditeatingPage } from './editeating.page';

const routes: Routes = [
  {
    path: '',
    component: EditeatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditeatingPageRoutingModule {}
