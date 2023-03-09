import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditmedicationPage } from './editmedication.page';
const routes = [
    {
        path: '',
        component: EditmedicationPage
    }
];
let EditmedicationPageRoutingModule = class EditmedicationPageRoutingModule {
};
EditmedicationPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditmedicationPageRoutingModule);
export { EditmedicationPageRoutingModule };
//# sourceMappingURL=editmedication-routing.module.js.map