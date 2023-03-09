import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatPage = class ChatPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    open() {
        this.navCtrl.navigateForward('/inbox');
    }
};
ChatPage = __decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.page.html',
        styleUrls: ['./chat.page.scss'],
    })
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.page.js.map