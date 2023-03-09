import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditeatingPageRoutingModule } from './editeating-routing.module';

import { EditeatingPage } from './editeating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditeatingPageRoutingModule
  ],
  declarations: [EditeatingPage]
})
export class EditeatingPageModule {}
