import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditlikesPage } from './editlikes.page';
const routes = [
    {
        path: '',
        component: EditlikesPage
    }
];
let EditlikesPageRoutingModule = class EditlikesPageRoutingModule {
};
EditlikesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditlikesPageRoutingModule);
export { EditlikesPageRoutingModule };
//# sourceMappingURL=editlikes-routing.module.js.map