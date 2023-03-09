import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CghomescreenPage } from './cghomescreen.page';

const routes: Routes = [
  {
    path: '',
    component: CghomescreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CghomescreenPageRoutingModule {}
