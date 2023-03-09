import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaregiverPage } from './caregiver.page';
const routes = [
    {
        path: '',
        component: CaregiverPage
    }
];
let CaregiverPageRoutingModule = class CaregiverPageRoutingModule {
};
CaregiverPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CaregiverPageRoutingModule);
export { CaregiverPageRoutingModule };
//# sourceMappingURL=caregiver-routing.module.js.map