import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CghomescreenPageRoutingModule } from './cghomescreen-routing.module';

import { CghomescreenPage } from './cghomescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CghomescreenPageRoutingModule
  ],
  declarations: [CghomescreenPage]
})
export class CghomescreenPageModule {}
