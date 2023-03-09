import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditfavoritePageRoutingModule } from './editfavorite-routing.module';
import { EditfavoritePage } from './editfavorite.page';
let EditfavoritePageModule = class EditfavoritePageModule {
};
EditfavoritePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditfavoritePageRoutingModule
        ],
        declarations: [EditfavoritePage]
    })
], EditfavoritePageModule);
export { EditfavoritePageModule };
//# sourceMappingURL=editfavorite.module.js.map