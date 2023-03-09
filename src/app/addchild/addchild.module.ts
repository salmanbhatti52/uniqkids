import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchildPageRoutingModule } from './addchild-routing.module';

import { AddchildPage } from './addchild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchildPageRoutingModule
  ],
  declarations: [AddchildPage]
})
export class AddchildPageModule {}
