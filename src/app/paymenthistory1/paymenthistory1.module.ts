import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paymenthistory1PageRoutingModule } from './paymenthistory1-routing.module';

import { Paymenthistory1Page } from './paymenthistory1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paymenthistory1PageRoutingModule
  ],
  declarations: [Paymenthistory1Page]
})
export class Paymenthistory1PageModule {}
