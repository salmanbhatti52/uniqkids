import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditchildPageRoutingModule } from './editchild-routing.module';
import { EditchildPage } from './editchild.page';
let EditchildPageModule = class EditchildPageModule {
};
EditchildPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditchildPageRoutingModule
        ],
        declarations: [EditchildPage]
    })
], EditchildPageModule);
export { EditchildPageModule };
//# sourceMappingURL=editchild.module.js.map