import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditfavoritePage } from './editfavorite.page';
const routes = [
    {
        path: '',
        component: EditfavoritePage
    }
];
let EditfavoritePageRoutingModule = class EditfavoritePageRoutingModule {
};
EditfavoritePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditfavoritePageRoutingModule);
export { EditfavoritePageRoutingModule };
//# sourceMappingURL=editfavorite-routing.module.js.map