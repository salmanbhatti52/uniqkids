import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomescreenPage } from './homescreen.page';
const routes = [
    {
        path: '',
        component: HomescreenPage
    }
];
let HomescreenPageRoutingModule = class HomescreenPageRoutingModule {
};
HomescreenPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HomescreenPageRoutingModule);
export { HomescreenPageRoutingModule };
//# sourceMappingURL=homescreen-routing.module.js.map