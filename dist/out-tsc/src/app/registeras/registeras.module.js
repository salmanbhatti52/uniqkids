import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterasPageRoutingModule } from './registeras-routing.module';
import { RegisterasPage } from './registeras.page';
let RegisterasPageModule = class RegisterasPageModule {
};
RegisterasPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RegisterasPageRoutingModule
        ],
        declarations: [RegisterasPage]
    })
], RegisterasPageModule);
export { RegisterasPageModule };
//# sourceMappingURL=registeras.module.js.map