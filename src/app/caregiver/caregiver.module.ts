import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaregiverPageRoutingModule } from './caregiver-routing.module';

import { CaregiverPage } from './caregiver.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaregiverPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CaregiverPage]
})
export class CaregiverPageModule {}
