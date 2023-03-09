import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildprofilePageRoutingModule } from './childprofile-routing.module';

import { ChildprofilePage } from './childprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildprofilePageRoutingModule
  ],
  declarations: [ChildprofilePage]
})
export class ChildprofilePageModule {}
