import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaregiverPage } from './caregiver.page';

const routes: Routes = [
  {
    path: '',
    component: CaregiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaregiverPageRoutingModule {}
