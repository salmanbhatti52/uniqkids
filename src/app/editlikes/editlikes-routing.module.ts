import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlikesPage } from './editlikes.page';

const routes: Routes = [
  {
    path: '',
    component: EditlikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlikesPageRoutingModule {}
