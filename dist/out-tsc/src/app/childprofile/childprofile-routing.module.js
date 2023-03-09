import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildprofilePage } from './childprofile.page';
const routes = [
    {
        path: '',
        component: ChildprofilePage
    }
];
let ChildprofilePageRoutingModule = class ChildprofilePageRoutingModule {
};
ChildprofilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChildprofilePageRoutingModule);
export { ChildprofilePageRoutingModule };
//# sourceMappingURL=childprofile-routing.module.js.map