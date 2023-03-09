import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParentprofilePageRoutingModule } from './parentprofile-routing.module';
import { ParentprofilePage } from './parentprofile.page';
let ParentprofilePageModule = class ParentprofilePageModule {
};
ParentprofilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ParentprofilePageRoutingModule
        ],
        declarations: [ParentprofilePage]
    })
], ParentprofilePageModule);
export { ParentprofilePageModule };
//# sourceMappingURL=parentprofile.module.js.map