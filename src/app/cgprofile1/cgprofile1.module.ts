import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cgprofile1PageRoutingModule } from './cgprofile1-routing.module';

import { Cgprofile1Page } from './cgprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cgprofile1PageRoutingModule
  ],
  declarations: [Cgprofile1Page]
})
export class Cgprofile1PageModule {}
