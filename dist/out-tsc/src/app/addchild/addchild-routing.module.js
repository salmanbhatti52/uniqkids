import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddchildPage } from './addchild.page';
const routes = [
    {
        path: '',
        component: AddchildPage
    }
];
let AddchildPageRoutingModule = class AddchildPageRoutingModule {
};
AddchildPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddchildPageRoutingModule);
export { AddchildPageRoutingModule };
//# sourceMappingURL=addchild-routing.module.js.map