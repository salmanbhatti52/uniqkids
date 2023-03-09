import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cgprofile1Page } from './cgprofile1.page';
const routes = [
    {
        path: '',
        component: Cgprofile1Page
    }
];
let Cgprofile1PageRoutingModule = class Cgprofile1PageRoutingModule {
};
Cgprofile1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Cgprofile1PageRoutingModule);
export { Cgprofile1PageRoutingModule };
//# sourceMappingURL=cgprofile1-routing.module.js.map