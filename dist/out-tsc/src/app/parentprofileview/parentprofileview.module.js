import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParentprofileviewPageRoutingModule } from './parentprofileview-routing.module';
import { ParentprofileviewPage } from './parentprofileview.page';
let ParentprofileviewPageModule = class ParentprofileviewPageModule {
};
ParentprofileviewPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ParentprofileviewPageRoutingModule
        ],
        declarations: [ParentprofileviewPage]
    })
], ParentprofileviewPageModule);
export { ParentprofileviewPageModule };
//# sourceMappingURL=parentprofileview.module.js.map