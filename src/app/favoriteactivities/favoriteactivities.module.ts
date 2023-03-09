import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteactivitiesPageRoutingModule } from './favoriteactivities-routing.module';

import { FavoriteactivitiesPage } from './favoriteactivities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteactivitiesPageRoutingModule
  ],
  declarations: [FavoriteactivitiesPage]
})
export class FavoriteactivitiesPageModule {}
