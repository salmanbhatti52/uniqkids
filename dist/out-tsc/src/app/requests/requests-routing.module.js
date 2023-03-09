import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestsPage } from './requests.page';
const routes = [
    {
        path: '',
        component: RequestsPage
    }
];
let RequestsPageRoutingModule = class RequestsPageRoutingModule {
};
RequestsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RequestsPageRoutingModule);
export { RequestsPageRoutingModule };
//# sourceMappingURL=requests-routing.module.js.map