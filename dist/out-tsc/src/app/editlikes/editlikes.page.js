import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditlikesPage = class EditlikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        this.array = [];
        this.likes = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.getlikes();
    }
    goback() {
        this.navCtrl.navigateBack('/editchild');
    }
    getlikes() {
        console.log('medarray', this.childService.likes);
        this.editchildService.likes.forEach(val => {
            let data = {
                title: val.likes,
            };
            this.array.push(data);
        });
    }
    add() {
        if (this.likes) {
            let data = {
                title: this.likes,
            };
            this.array.push(data);
            this.editchildService.likes.push(this.likes);
            this.likes = '';
        }
        else if (!this.likes) {
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
        this.editchildService.likes.map((el, index) => {
            console.log('index', i);
            let splice = this.editchildService.likes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
EditlikesPage = __decorate([
    Component({
        selector: 'app-editlikes',
        templateUrl: './editlikes.page.html',
        styleUrls: ['./editlikes.page.scss'],
    })
], EditlikesPage);
export { EditlikesPage };
//# sourceMappingURL=editlikes.page.js.map