import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomescreenPageRoutingModule } from './homescreen-routing.module';
import { HomescreenPage } from './homescreen.page';
let HomescreenPageModule = class HomescreenPageModule {
};
HomescreenPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HomescreenPageRoutingModule
        ],
        declarations: [HomescreenPage]
    })
], HomescreenPageModule);
export { HomescreenPageModule };
//# sourceMappingURL=homescreen.module.js.map