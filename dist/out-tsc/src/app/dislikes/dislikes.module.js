import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DislikesPageRoutingModule } from './dislikes-routing.module';
import { DislikesPage } from './dislikes.page';
let DislikesPageModule = class DislikesPageModule {
};
DislikesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DislikesPageRoutingModule
        ],
        declarations: [DislikesPage]
    })
], DislikesPageModule);
export { DislikesPageModule };
//# sourceMappingURL=dislikes.module.js.map