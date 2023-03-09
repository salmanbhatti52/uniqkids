import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterasPage } from './registeras.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterasPageRoutingModule {}
