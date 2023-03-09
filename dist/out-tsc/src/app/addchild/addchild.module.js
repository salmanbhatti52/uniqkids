import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddchildPageRoutingModule } from './addchild-routing.module';
import { AddchildPage } from './addchild.page';
let AddchildPageModule = class AddchildPageModule {
};
AddchildPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AddchildPageRoutingModule
        ],
        declarations: [AddchildPage]
    })
], AddchildPageModule);
export { AddchildPageModule };
//# sourceMappingURL=addchild.module.js.map