import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cgviewprofile1Page } from './cgviewprofile1.page';
const routes = [
    {
        path: '',
        component: Cgviewprofile1Page
    }
];
let Cgviewprofile1PageRoutingModule = class Cgviewprofile1PageRoutingModule {
};
Cgviewprofile1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Cgviewprofile1PageRoutingModule);
export { Cgviewprofile1PageRoutingModule };
//# sourceMappingURL=cgviewprofile1-routing.module.js.map