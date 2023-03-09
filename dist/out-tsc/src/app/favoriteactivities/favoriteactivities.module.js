import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoriteactivitiesPageRoutingModule } from './favoriteactivities-routing.module';
import { FavoriteactivitiesPage } from './favoriteactivities.page';
let FavoriteactivitiesPageModule = class FavoriteactivitiesPageModule {
};
FavoriteactivitiesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FavoriteactivitiesPageRoutingModule
        ],
        declarations: [FavoriteactivitiesPage]
    })
], FavoriteactivitiesPageModule);
export { FavoriteactivitiesPageModule };
//# sourceMappingURL=favoriteactivities.module.js.map