import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsnackPageRoutingModule } from './editsnack-routing.module';

import { EditsnackPage } from './editsnack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsnackPageRoutingModule
  ],
  declarations: [EditsnackPage]
})
export class EditsnackPageModule {}
