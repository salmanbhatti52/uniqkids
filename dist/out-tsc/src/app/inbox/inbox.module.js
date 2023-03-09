import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InboxPageRoutingModule } from './inbox-routing.module';
import { InboxPage } from './inbox.page';
let InboxPageModule = class InboxPageModule {
};
InboxPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InboxPageRoutingModule
        ],
        declarations: [InboxPage]
    })
], InboxPageModule);
export { InboxPageModule };
//# sourceMappingURL=inbox.module.js.map