import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteaccPageRoutingModule } from './deleteacc-routing.module';

import { DeleteaccPage } from './deleteacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteaccPageRoutingModule
  ],
  declarations: [DeleteaccPage]
})
export class DeleteaccPageModule {}
