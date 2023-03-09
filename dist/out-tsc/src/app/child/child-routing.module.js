import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildPage } from './child.page';
const routes = [
    {
        path: '',
        component: ChildPage
    }
];
let ChildPageRoutingModule = class ChildPageRoutingModule {
};
ChildPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChildPageRoutingModule);
export { ChildPageRoutingModule };
//# sourceMappingURL=child-routing.module.js.map