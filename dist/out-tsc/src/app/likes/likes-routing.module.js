import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LikesPage } from './likes.page';
const routes = [
    {
        path: '',
        component: LikesPage
    }
];
let LikesPageRoutingModule = class LikesPageRoutingModule {
};
LikesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LikesPageRoutingModule);
export { LikesPageRoutingModule };
//# sourceMappingURL=likes-routing.module.js.map