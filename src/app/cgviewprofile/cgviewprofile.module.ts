import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CgviewprofilePageRoutingModule } from './cgviewprofile-routing.module';

import { CgviewprofilePage } from './cgviewprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CgviewprofilePageRoutingModule
  ],
  declarations: [CgviewprofilePage]
})
export class CgviewprofilePageModule {}
