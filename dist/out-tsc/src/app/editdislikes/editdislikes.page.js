import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditdislikesPage = class EditdislikesPage {
    constructor(navCtrl, childService, editchildService, route) {
        this.navCtrl = navCtrl;
        this.childService = childService;
        this.editchildService = editchildService;
        this.route = route;
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
        this.navCtrl.navigateBack('/editchild');
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
        this.editchildService.dislikes.map((el, index) => {
            console.log('index', i);
            let splice = this.editchildService.dislikes.splice(i, 1);
            console.log('splice', splice);
        });
    }
};
EditdislikesPage = __decorate([
    Component({
        selector: 'app-editdislikes',
        templateUrl: './editdislikes.page.html',
        styleUrls: ['./editdislikes.page.scss'],
    })
], EditdislikesPage);
export { EditdislikesPage };
//# sourceMappingURL=editdislikes.page.js.map