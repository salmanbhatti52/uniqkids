import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Requests1Page } from './requests1.page';
const routes = [
    {
        path: '',
        component: Requests1Page
    }
];
let Requests1PageRoutingModule = class Requests1PageRoutingModule {
};
Requests1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Requests1PageRoutingModule);
export { Requests1PageRoutingModule };
//# sourceMappingURL=requests1-routing.module.js.map