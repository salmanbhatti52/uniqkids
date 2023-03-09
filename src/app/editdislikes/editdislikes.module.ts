import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdislikesPageRoutingModule } from './editdislikes-routing.module';

import { EditdislikesPage } from './editdislikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdislikesPageRoutingModule
  ],
  declarations: [EditdislikesPage]
})
export class EditdislikesPageModule {}
