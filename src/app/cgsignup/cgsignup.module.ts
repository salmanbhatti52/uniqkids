import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CgsignupPageRoutingModule } from './cgsignup-routing.module';

import { CgsignupPage } from './cgsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CgsignupPageRoutingModule
  ],
  declarations: [CgsignupPage]
})
export class CgsignupPageModule {}
