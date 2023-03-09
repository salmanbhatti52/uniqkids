import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestpopupPageRoutingModule } from './requestpopup-routing.module';
import { RequestpopupPage } from './requestpopup.page';
let RequestpopupPageModule = class RequestpopupPageModule {
};
RequestpopupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RequestpopupPageRoutingModule
        ],
        declarations: [RequestpopupPage]
    })
], RequestpopupPageModule);
export { RequestpopupPageModule };
//# sourceMappingURL=requestpopup.module.js.map