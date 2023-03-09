import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cgviewprofile1PageRoutingModule } from './cgviewprofile1-routing.module';

import { Cgviewprofile1Page } from './cgviewprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cgviewprofile1PageRoutingModule
  ],
  declarations: [Cgviewprofile1Page]
})
export class Cgviewprofile1PageModule {}
