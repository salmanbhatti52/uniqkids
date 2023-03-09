import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatingtimePageRoutingModule } from './eatingtime-routing.module';

import { EatingtimePage } from './eatingtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatingtimePageRoutingModule
  ],
  declarations: [EatingtimePage]
})
export class EatingtimePageModule {}
