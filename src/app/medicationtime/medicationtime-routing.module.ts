import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationtimePage } from './medicationtime.page';

const routes: Routes = [
  {
    path: '',
    component: MedicationtimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicationtimePageRoutingModule {}
