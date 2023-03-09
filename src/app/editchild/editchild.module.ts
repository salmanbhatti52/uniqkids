import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditchildPageRoutingModule } from './editchild-routing.module';

import { EditchildPage } from './editchild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditchildPageRoutingModule
  ],
  declarations: [EditchildPage]
})
export class EditchildPageModule {}
