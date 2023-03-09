import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyhomescreenPage } from './agencyhomescreen.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyhomescreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyhomescreenPageRoutingModule {}
