import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Requests1PageRoutingModule } from './requests1-routing.module';
import { Requests1Page } from './requests1.page';
let Requests1PageModule = class Requests1PageModule {
};
Requests1PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Requests1PageRoutingModule
        ],
        declarations: [Requests1Page]
    })
], Requests1PageModule);
export { Requests1PageModule };
//# sourceMappingURL=requests1.module.js.map