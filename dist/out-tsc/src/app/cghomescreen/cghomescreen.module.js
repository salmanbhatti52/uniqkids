import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CghomescreenPageRoutingModule } from './cghomescreen-routing.module';
import { CghomescreenPage } from './cghomescreen.page';
let CghomescreenPageModule = class CghomescreenPageModule {
};
CghomescreenPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CghomescreenPageRoutingModule
        ],
        declarations: [CghomescreenPage]
    })
], CghomescreenPageModule);
export { CghomescreenPageModule };
//# sourceMappingURL=cghomescreen.module.js.map