import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DislikesPage } from './dislikes.page';

const routes: Routes = [
  {
    path: '',
    component: DislikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DislikesPageRoutingModule {}
