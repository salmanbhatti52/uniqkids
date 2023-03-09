import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InboxPage } from './inbox.page';
const routes = [
    {
        path: '',
        component: InboxPage
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InboxPageRoutingModule);
export { InboxPageRoutingModule };
//# sourceMappingURL=inbox-routing.module.js.map