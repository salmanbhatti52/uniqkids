import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsnackPage } from './editsnack.page';

const routes: Routes = [
  {
    path: '',
    component: EditsnackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsnackPageRoutingModule {}
