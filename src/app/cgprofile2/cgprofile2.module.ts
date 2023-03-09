import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cgprofile2PageRoutingModule } from './cgprofile2-routing.module';

import { Cgprofile2Page } from './cgprofile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cgprofile2PageRoutingModule
  ],
  declarations: [Cgprofile2Page]
})
export class Cgprofile2PageModule {}
