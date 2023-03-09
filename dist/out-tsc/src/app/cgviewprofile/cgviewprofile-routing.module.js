import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CgviewprofilePage } from './cgviewprofile.page';
const routes = [
    {
        path: '',
        component: CgviewprofilePage
    }
];
let CgviewprofilePageRoutingModule = class CgviewprofilePageRoutingModule {
};
CgviewprofilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CgviewprofilePageRoutingModule);
export { CgviewprofilePageRoutingModule };
//# sourceMappingURL=cgviewprofile-routing.module.js.map