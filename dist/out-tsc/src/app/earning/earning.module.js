import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EarningPageRoutingModule } from './earning-routing.module';
import { EarningPage } from './earning.page';
let EarningPageModule = class EarningPageModule {
};
EarningPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EarningPageRoutingModule
        ],
        declarations: [EarningPage]
    })
], EarningPageModule);
export { EarningPageModule };
//# sourceMappingURL=earning.module.js.map