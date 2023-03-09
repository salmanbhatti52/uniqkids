import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FavoriteactivitiesPage = class FavoriteactivitiesPage {
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
        this.favorite = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
    }
    add() {
        if (this.favorite) {
            let data = {
                title: this.favorite,
            };
            this.array.push(data);
            this.childService.favorite.push(this.favorite);
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
        this.childService.favorite.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.favorite.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
FavoriteactivitiesPage = __decorate([
    Component({
        selector: 'app-favoriteactivities',
        templateUrl: './favoriteactivities.page.html',
        styleUrls: ['./favoriteactivities.page.scss'],
    })
], FavoriteactivitiesPage);
export { FavoriteactivitiesPage };
//# sourceMappingURL=favoriteactivities.page.js.map