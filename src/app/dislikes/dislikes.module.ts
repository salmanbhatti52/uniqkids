import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DislikesPageRoutingModule } from './dislikes-routing.module';

import { DislikesPage } from './dislikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DislikesPageRoutingModule
  ],
  declarations: [DislikesPage]
})
export class DislikesPageModule {}
