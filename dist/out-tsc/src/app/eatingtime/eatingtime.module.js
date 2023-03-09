import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EatingtimePageRoutingModule } from './eatingtime-routing.module';
import { EatingtimePage } from './eatingtime.page';
let EatingtimePageModule = class EatingtimePageModule {
};
EatingtimePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EatingtimePageRoutingModule
        ],
        declarations: [EatingtimePage]
    })
], EatingtimePageModule);
export { EatingtimePageModule };
//# sourceMappingURL=eatingtime.module.js.map