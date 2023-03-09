import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlikesPageRoutingModule } from './editlikes-routing.module';

import { EditlikesPage } from './editlikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlikesPageRoutingModule
  ],
  declarations: [EditlikesPage]
})
export class EditlikesPageModule {}
