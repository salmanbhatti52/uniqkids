import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestsPageRoutingModule } from './requests-routing.module';
import { RequestsPage } from './requests.page';
let RequestsPageModule = class RequestsPageModule {
};
RequestsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RequestsPageRoutingModule
        ],
        declarations: [RequestsPage]
    })
], RequestsPageModule);
export { RequestsPageModule };
//# sourceMappingURL=requests.module.js.map