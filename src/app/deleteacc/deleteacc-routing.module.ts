import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteaccPage } from './deleteacc.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteaccPageRoutingModule {}
