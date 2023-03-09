import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfavoritePageRoutingModule } from './editfavorite-routing.module';

import { EditfavoritePage } from './editfavorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfavoritePageRoutingModule
  ],
  declarations: [EditfavoritePage]
})
export class EditfavoritePageModule {}
