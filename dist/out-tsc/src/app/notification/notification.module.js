import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationPageRoutingModule } from './notification-routing.module';
import { NotificationPage } from './notification.page';
let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NotificationPageRoutingModule
        ],
        declarations: [NotificationPage]
    })
], NotificationPageModule);
export { NotificationPageModule };
//# sourceMappingURL=notification.module.js.map