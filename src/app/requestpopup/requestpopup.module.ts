import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestpopupPageRoutingModule } from './requestpopup-routing.module';

import { RequestpopupPage } from './requestpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestpopupPageRoutingModule
  ],
  declarations: [RequestpopupPage]
})
export class RequestpopupPageModule {}
