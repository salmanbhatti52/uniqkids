import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentprofilePage } from './parentprofile.page';
const routes = [
    {
        path: '',
        component: ParentprofilePage
    }
];
let ParentprofilePageRoutingModule = class ParentprofilePageRoutingModule {
};
ParentprofilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ParentprofilePageRoutingModule);
export { ParentprofilePageRoutingModule };
//# sourceMappingURL=parentprofile-routing.module.js.map