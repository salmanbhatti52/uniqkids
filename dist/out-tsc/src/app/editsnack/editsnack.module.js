import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditsnackPageRoutingModule } from './editsnack-routing.module';
import { EditsnackPage } from './editsnack.page';
let EditsnackPageModule = class EditsnackPageModule {
};
EditsnackPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditsnackPageRoutingModule
        ],
        declarations: [EditsnackPage]
    })
], EditsnackPageModule);
export { EditsnackPageModule };
//# sourceMappingURL=editsnack.module.js.map