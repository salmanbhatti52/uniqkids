import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CghomescreenPage } from './cghomescreen.page';
const routes = [
    {
        path: '',
        component: CghomescreenPage
    }
];
let CghomescreenPageRoutingModule = class CghomescreenPageRoutingModule {
};
CghomescreenPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CghomescreenPageRoutingModule);
export { CghomescreenPageRoutingModule };
//# sourceMappingURL=cghomescreen-routing.module.js.map