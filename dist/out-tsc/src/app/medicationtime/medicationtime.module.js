import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicationtimePageRoutingModule } from './medicationtime-routing.module';
import { MedicationtimePage } from './medicationtime.page';
let MedicationtimePageModule = class MedicationtimePageModule {
};
MedicationtimePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MedicationtimePageRoutingModule
        ],
        declarations: [MedicationtimePage]
    })
], MedicationtimePageModule);
export { MedicationtimePageModule };
//# sourceMappingURL=medicationtime.module.js.map