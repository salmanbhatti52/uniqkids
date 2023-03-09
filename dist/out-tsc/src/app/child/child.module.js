import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChildPageRoutingModule } from './child-routing.module';
import { ChildPage } from './child.page';
let ChildPageModule = class ChildPageModule {
};
ChildPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ChildPageRoutingModule
        ],
        declarations: [ChildPage]
    })
], ChildPageModule);
export { ChildPageModule };
//# sourceMappingURL=child.module.js.map