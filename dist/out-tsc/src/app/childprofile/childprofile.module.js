import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChildprofilePageRoutingModule } from './childprofile-routing.module';
import { ChildprofilePage } from './childprofile.page';
let ChildprofilePageModule = class ChildprofilePageModule {
};
ChildprofilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ChildprofilePageRoutingModule
        ],
        declarations: [ChildprofilePage]
    })
], ChildprofilePageModule);
export { ChildprofilePageModule };
//# sourceMappingURL=childprofile.module.js.map