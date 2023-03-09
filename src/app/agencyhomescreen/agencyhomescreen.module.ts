import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyhomescreenPageRoutingModule } from './agencyhomescreen-routing.module';

import { AgencyhomescreenPage } from './agencyhomescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyhomescreenPageRoutingModule
  ],
  declarations: [AgencyhomescreenPage]
})
export class AgencyhomescreenPageModule {}
