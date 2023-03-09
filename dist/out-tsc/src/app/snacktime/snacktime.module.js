import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SnacktimePageRoutingModule } from './snacktime-routing.module';
import { SnacktimePage } from './snacktime.page';
let SnacktimePageModule = class SnacktimePageModule {
};
SnacktimePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SnacktimePageRoutingModule
        ],
        declarations: [SnacktimePage]
    })
], SnacktimePageModule);
export { SnacktimePageModule };
//# sourceMappingURL=snacktime.module.js.map