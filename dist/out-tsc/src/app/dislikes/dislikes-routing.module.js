import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DislikesPage } from './dislikes.page';
const routes = [
    {
        path: '',
        component: DislikesPage
    }
];
let DislikesPageRoutingModule = class DislikesPageRoutingModule {
};
DislikesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DislikesPageRoutingModule);
export { DislikesPageRoutingModule };
//# sourceMappingURL=dislikes-routing.module.js.map