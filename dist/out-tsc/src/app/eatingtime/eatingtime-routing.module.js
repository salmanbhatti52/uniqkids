import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EatingtimePage } from './eatingtime.page';
const routes = [
    {
        path: '',
        component: EatingtimePage
    }
];
let EatingtimePageRoutingModule = class EatingtimePageRoutingModule {
};
EatingtimePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EatingtimePageRoutingModule);
export { EatingtimePageRoutingModule };
//# sourceMappingURL=eatingtime-routing.module.js.map