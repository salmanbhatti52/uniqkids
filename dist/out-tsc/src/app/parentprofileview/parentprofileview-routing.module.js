import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentprofileviewPage } from './parentprofileview.page';
const routes = [
    {
        path: '',
        component: ParentprofileviewPage
    }
];
let ParentprofileviewPageRoutingModule = class ParentprofileviewPageRoutingModule {
};
ParentprofileviewPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ParentprofileviewPageRoutingModule);
export { ParentprofileviewPageRoutingModule };
//# sourceMappingURL=parentprofileview-routing.module.js.map