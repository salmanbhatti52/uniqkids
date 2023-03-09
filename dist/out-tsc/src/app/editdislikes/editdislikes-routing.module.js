import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditdislikesPage } from './editdislikes.page';
const routes = [
    {
        path: '',
        component: EditdislikesPage
    }
];
let EditdislikesPageRoutingModule = class EditdislikesPageRoutingModule {
};
EditdislikesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditdislikesPageRoutingModule);
export { EditdislikesPageRoutingModule };
//# sourceMappingURL=editdislikes-routing.module.js.map