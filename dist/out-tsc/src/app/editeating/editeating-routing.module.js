import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditeatingPage } from './editeating.page';
const routes = [
    {
        path: '',
        component: EditeatingPage
    }
];
let EditeatingPageRoutingModule = class EditeatingPageRoutingModule {
};
EditeatingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditeatingPageRoutingModule);
export { EditeatingPageRoutingModule };
//# sourceMappingURL=editeating-routing.module.js.map