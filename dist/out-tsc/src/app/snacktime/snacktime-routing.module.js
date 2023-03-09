import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SnacktimePage } from './snacktime.page';
const routes = [
    {
        path: '',
        component: SnacktimePage
    }
];
let SnacktimePageRoutingModule = class SnacktimePageRoutingModule {
};
SnacktimePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SnacktimePageRoutingModule);
export { SnacktimePageRoutingModule };
//# sourceMappingURL=snacktime-routing.module.js.map