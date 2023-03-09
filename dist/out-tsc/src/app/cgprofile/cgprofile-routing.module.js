import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CgprofilePage } from './cgprofile.page';
const routes = [
    {
        path: '',
        component: CgprofilePage
    }
];
let CgprofilePageRoutingModule = class CgprofilePageRoutingModule {
};
CgprofilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CgprofilePageRoutingModule);
export { CgprofilePageRoutingModule };
//# sourceMappingURL=cgprofile-routing.module.js.map