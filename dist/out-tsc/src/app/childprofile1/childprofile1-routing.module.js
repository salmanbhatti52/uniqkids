import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Childprofile1Page } from './childprofile1.page';
const routes = [
    {
        path: '',
        component: Childprofile1Page
    }
];
let Childprofile1PageRoutingModule = class Childprofile1PageRoutingModule {
};
Childprofile1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Childprofile1PageRoutingModule);
export { Childprofile1PageRoutingModule };
//# sourceMappingURL=childprofile1-routing.module.js.map