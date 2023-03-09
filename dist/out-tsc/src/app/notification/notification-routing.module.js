import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationPage } from './notification.page';
const routes = [
    {
        path: '',
        component: NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotificationPageRoutingModule);
export { NotificationPageRoutingModule };
//# sourceMappingURL=notification-routing.module.js.map