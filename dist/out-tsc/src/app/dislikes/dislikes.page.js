import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DislikesPage = class DislikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
        // array=[
        // 	{ title: 'Cars'},
        //    	{ title: 'Playing with toys' },
        // ]
        this.array = [];
        this.dislikes = '';
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        // this.getdislikes();
    }
    goback() {
        this.navCtrl.navigateBack('/addchild');
    }
    //  getdislikes(){
    //   this.childService.dislikes.forEach(val=>{
    //   let data={
    //      title:val.likes,
    //    }
    //    this.array.push(data)
    //   })
    // }
    add() {
        if (this.dislikes) {
            // let data={
            //   title: this.dislikes,
            // }
            // this.array.push(data);
            this.childService.dislikes.push(this.dislikes);
            this.editchildService.dislikes.push(this.dislikes);
            this.dislikes = '';
        }
        else if (!this.dislikes) {
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
        this.childService.dislikes.map((el, index) => {
            console.log('index', i);
            let splice = this.childService.dislikes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
DislikesPage = __decorate([
    Component({
        selector: 'app-dislikes',
        templateUrl: './dislikes.page.html',
        styleUrls: ['./dislikes.page.scss'],
    })
], DislikesPage);
export { DislikesPage };
//# sourceMappingURL=dislikes.page.js.map