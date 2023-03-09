import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LikesPageRoutingModule } from './likes-routing.module';
import { LikesPage } from './likes.page';
let LikesPageModule = class LikesPageModule {
};
LikesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LikesPageRoutingModule
        ],
        declarations: [LikesPage]
    })
], LikesPageModule);
export { LikesPageModule };
//# sourceMappingURL=likes.module.js.map