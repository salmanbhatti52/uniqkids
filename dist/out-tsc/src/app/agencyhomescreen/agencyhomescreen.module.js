import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgencyhomescreenPageRoutingModule } from './agencyhomescreen-routing.module';
import { AgencyhomescreenPage } from './agencyhomescreen.page';
let AgencyhomescreenPageModule = class AgencyhomescreenPageModule {
};
AgencyhomescreenPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AgencyhomescreenPageRoutingModule
        ],
        declarations: [AgencyhomescreenPage]
    })
], AgencyhomescreenPageModule);
export { AgencyhomescreenPageModule };
//# sourceMappingURL=agencyhomescreen.module.js.map