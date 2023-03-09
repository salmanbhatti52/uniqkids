import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CgprofilePageRoutingModule } from './cgprofile-routing.module';

import { CgprofilePage } from './cgprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CgprofilePageRoutingModule
  ],
  declarations: [CgprofilePage]
})
export class CgprofilePageModule {}
