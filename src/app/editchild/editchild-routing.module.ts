import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditchildPage } from './editchild.page';

const routes: Routes = [
  {
    path: '',
    component: EditchildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditchildPageRoutingModule {}
