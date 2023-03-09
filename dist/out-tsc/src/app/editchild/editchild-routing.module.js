import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditchildPage } from './editchild.page';
const routes = [
    {
        path: '',
        component: EditchildPage
    }
];
let EditchildPageRoutingModule = class EditchildPageRoutingModule {
};
EditchildPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditchildPageRoutingModule);
export { EditchildPageRoutingModule };
//# sourceMappingURL=editchild-routing.module.js.map