import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentprofileviewPageRoutingModule } from './parentprofileview-routing.module';

import { ParentprofileviewPage } from './parentprofileview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentprofileviewPageRoutingModule
  ],
  declarations: [ParentprofileviewPage]
})
export class ParentprofileviewPageModule {}
