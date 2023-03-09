import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgencyhomescreenPage } from './agencyhomescreen.page';
const routes = [
    {
        path: '',
        component: AgencyhomescreenPage
    }
];
let AgencyhomescreenPageRoutingModule = class AgencyhomescreenPageRoutingModule {
};
AgencyhomescreenPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AgencyhomescreenPageRoutingModule);
export { AgencyhomescreenPageRoutingModule };
//# sourceMappingURL=agencyhomescreen-routing.module.js.map