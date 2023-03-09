import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnacktimePageRoutingModule } from './snacktime-routing.module';

import { SnacktimePage } from './snacktime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnacktimePageRoutingModule
  ],
  declarations: [SnacktimePage]
})
export class SnacktimePageModule {}
