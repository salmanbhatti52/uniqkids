import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditfavoritePage = class EditfavoritePage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        this.array = [];
        this.favorite = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/editchild');
    }
    add() {
        if (this.favorite) {
            let data = {
                title: this.favorite,
            };
            this.array.push(data);
            this.editchildService.favorite.push(this.favorite);
            this.favorite = '';
        }
        else if (!this.favorite) {
            console.log('empty');
            this.error.status = true;
            this.error.message = "Field is required";
            setTimeout(() => {
                this.error.status = false;
                this.error.message = "";
            }, 2000);
        }
    }
    del(i) {
        console.log('index', i);
        this.editchildService.favorite.map((el, index) => {
            console.log('index', i);
            let splice = this.editchildService.favorite.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
EditfavoritePage = __decorate([
    Component({
        selector: 'app-editfavorite',
        templateUrl: './editfavorite.page.html',
        styleUrls: ['./editfavorite.page.scss'],
    })
], EditfavoritePage);
export { EditfavoritePage };
//# sourceMappingURL=editfavorite.page.js.map