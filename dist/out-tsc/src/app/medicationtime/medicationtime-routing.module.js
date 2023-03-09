import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicationtimePage } from './medicationtime.page';
const routes = [
    {
        path: '',
        component: MedicationtimePage
    }
];
let MedicationtimePageRoutingModule = class MedicationtimePageRoutingModule {
};
MedicationtimePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MedicationtimePageRoutingModule);
export { MedicationtimePageRoutingModule };
//# sourceMappingURL=medicationtime-routing.module.js.map