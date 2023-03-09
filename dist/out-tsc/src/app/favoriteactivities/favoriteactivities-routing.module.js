import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoriteactivitiesPage } from './favoriteactivities.page';
const routes = [
    {
        path: '',
        component: FavoriteactivitiesPage
    }
];
let FavoriteactivitiesPageRoutingModule = class FavoriteactivitiesPageRoutingModule {
};
FavoriteactivitiesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FavoriteactivitiesPageRoutingModule);
export { FavoriteactivitiesPageRoutingModule };
//# sourceMappingURL=favoriteactivities-routing.module.js.map