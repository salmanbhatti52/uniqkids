import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterasPage } from './registeras.page';
const routes = [
    {
        path: '',
        component: RegisterasPage
    }
];
let RegisterasPageRoutingModule = class RegisterasPageRoutingModule {
};
RegisterasPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegisterasPageRoutingModule);
export { RegisterasPageRoutingModule };
//# sourceMappingURL=registeras-routing.module.js.map