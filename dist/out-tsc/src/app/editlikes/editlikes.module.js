import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditlikesPageRoutingModule } from './editlikes-routing.module';
import { EditlikesPage } from './editlikes.page';
let EditlikesPageModule = class EditlikesPageModule {
};
EditlikesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditlikesPageRoutingModule
        ],
        declarations: [EditlikesPage]
    })
], EditlikesPageModule);
export { EditlikesPageModule };
//# sourceMappingURL=editlikes.module.js.map