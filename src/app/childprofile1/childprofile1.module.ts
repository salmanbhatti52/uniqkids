import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Childprofile1PageRoutingModule } from './childprofile1-routing.module';

import { Childprofile1Page } from './childprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Childprofile1PageRoutingModule
  ],
  declarations: [Childprofile1Page]
})
export class Childprofile1PageModule {}
