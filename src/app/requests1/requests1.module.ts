import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Requests1PageRoutingModule } from './requests1-routing.module';

import { Requests1Page } from './requests1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Requests1PageRoutingModule
  ],
  declarations: [Requests1Page]
})
export class Requests1PageModule {}
