import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Profile1Page } from './profile1.page';
const routes = [
    {
        path: '',
        component: Profile1Page
    }
];
let Profile1PageRoutingModule = class Profile1PageRoutingModule {
};
Profile1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Profile1PageRoutingModule);
export { Profile1PageRoutingModule };
//# sourceMappingURL=profile1-routing.module.js.map