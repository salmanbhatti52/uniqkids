import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmedicationPage } from './editmedication.page';

const routes: Routes = [
  {
    path: '',
    component: EditmedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmedicationPageRoutingModule {}
