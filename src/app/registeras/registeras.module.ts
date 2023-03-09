import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterasPageRoutingModule } from './registeras-routing.module';

import { RegisterasPage } from './registeras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterasPageRoutingModule
  ],
  declarations: [RegisterasPage]
})
export class RegisterasPageModule {}
