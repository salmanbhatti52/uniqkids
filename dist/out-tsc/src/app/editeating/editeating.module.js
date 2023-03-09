import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditeatingPageRoutingModule } from './editeating-routing.module';
import { EditeatingPage } from './editeating.page';
let EditeatingPageModule = class EditeatingPageModule {
};
EditeatingPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditeatingPageRoutingModule
        ],
        declarations: [EditeatingPage]
    })
], EditeatingPageModule);
export { EditeatingPageModule };
//# sourceMappingURL=editeating.module.js.map