import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Profile1PageRoutingModule } from './profile1-routing.module';
import { Profile1Page } from './profile1.page';
let Profile1PageModule = class Profile1PageModule {
};
Profile1PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Profile1PageRoutingModule
        ],
        declarations: [Profile1Page]
    })
], Profile1PageModule);
export { Profile1PageModule };
//# sourceMappingURL=profile1.module.js.map