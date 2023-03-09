import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditsnackPage } from './editsnack.page';
const routes = [
    {
        path: '',
        component: EditsnackPage
    }
];
let EditsnackPageRoutingModule = class EditsnackPageRoutingModule {
};
EditsnackPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditsnackPageRoutingModule);
export { EditsnackPageRoutingModule };
//# sourceMappingURL=editsnack-routing.module.js.map