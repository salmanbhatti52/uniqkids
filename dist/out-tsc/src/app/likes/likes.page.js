import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LikesPage = class LikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        // array=[
        // 	{ title: 'Cars'},
        //    { title: 'Playing with toys' },
        // ]
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
        this.navCtrl.navigateBack('/addchild');
    }
    getlikes() {
        console.log('medarray', this.childService.likes);
        this.childService.likes.forEach(val => {
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
            this.childService.likes.push(this.likes);
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
        this.childService.likes.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.likes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
LikesPage = __decorate([
    Component({
        selector: 'app-likes',
        templateUrl: './likes.page.html',
        styleUrls: ['./likes.page.scss'],
    })
], LikesPage);
export { LikesPage };
//# sourceMappingURL=likes.page.js.map