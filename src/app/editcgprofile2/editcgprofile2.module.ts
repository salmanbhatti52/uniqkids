import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editcgprofile2PageRoutingModule } from './editcgprofile2-routing.module';

import { Editcgprofile2Page } from './editcgprofile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editcgprofile2PageRoutingModule
  ],
  declarations: [Editcgprofile2Page]
})
export class Editcgprofile2PageModule {}
