import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentprofilePageRoutingModule } from './parentprofile-routing.module';

import { ParentprofilePage } from './parentprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentprofilePageRoutingModule
  ],
  declarations: [ParentprofilePage]
})
export class ParentprofilePageModule {}
