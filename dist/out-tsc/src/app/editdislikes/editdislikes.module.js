import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditdislikesPageRoutingModule } from './editdislikes-routing.module';
import { EditdislikesPage } from './editdislikes.page';
let EditdislikesPageModule = class EditdislikesPageModule {
};
EditdislikesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditdislikesPageRoutingModule
        ],
        declarations: [EditdislikesPage]
    })
], EditdislikesPageModule);
export { EditdislikesPageModule };
//# sourceMappingURL=editdislikes.module.js.map