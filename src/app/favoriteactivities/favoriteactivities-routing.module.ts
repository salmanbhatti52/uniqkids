import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteactivitiesPage } from './favoriteactivities.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteactivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteactivitiesPageRoutingModule {}
