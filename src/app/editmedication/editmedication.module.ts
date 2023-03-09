import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmedicationPageRoutingModule } from './editmedication-routing.module';

import { EditmedicationPage } from './editmedication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmedicationPageRoutingModule
  ],
  declarations: [EditmedicationPage]
})
export class EditmedicationPageModule {}
