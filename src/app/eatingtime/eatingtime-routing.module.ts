import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatingtimePage } from './eatingtime.page';

const routes: Routes = [
  {
    path: '',
    component: EatingtimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatingtimePageRoutingModule {}
