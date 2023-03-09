import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfavoritePage } from './editfavorite.page';

const routes: Routes = [
  {
    path: '',
    component: EditfavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfavoritePageRoutingModule {}
