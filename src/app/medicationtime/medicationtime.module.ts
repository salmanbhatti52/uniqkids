import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicationtimePageRoutingModule } from './medicationtime-routing.module';

import { MedicationtimePage } from './medicationtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicationtimePageRoutingModule
  ],
  declarations: [MedicationtimePage]
})
export class MedicationtimePageModule {}
