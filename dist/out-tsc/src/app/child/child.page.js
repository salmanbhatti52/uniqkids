import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChildPage = class ChildPage {
    constructor(navCtrl, loading, rest) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.rest = rest;
        this.childarray = [];
        this.error = {
            status: false,
            message: "",
        };
    }
    ngOnInit() {
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        // this.getchilds();
    }
    ionViewDidEnter() {
        this.getchilds();
    }
    getchilds() {
        this.childarray = [];
        this.loading.loadershow();
        this.rest.sendRequest("display_children", { userId: this.userid }).subscribe((data) => {
            if (data.status == 'success') {
                console.log('display_children data::', data);
                data.data.forEach(val => {
                    if (val.profile_picture == null) {
                        this.defaultProfile = 'assets/imgs/child.png';
                    }
                    else {
                        this.defaultProfile = val.profile_picture;
                    }
                    let Obj = {
                        childid: val.child_id,
                        parentid: val.parent_id,
                        name: val.child_name,
                        profile: this.defaultProfile,
                        age: val.age,
                        description: val.additional_notes,
                    };
                    this.childarray.push(Obj);
                    this.loading.hideLoader();
                    this.error.status = false;
                });
                console.log('child array:', this.childarray);
            }
            if (data.status == 'error') {
                this.loading.hideLoader();
                console.log('signup request data:', data);
                this.error.status = true;
                this.error.message = data.message;
                // setTimeout(() => {
                //   this.error.status = false;
                //   this.error.message = "";
                // }, 3000);
            }
        });
    }
    gotoprofile(item) {
        this.navCtrl.navigateForward(['/childprofile', {
                childid: item.childid,
                parentid: item.parentid
            }]);
    }
    next() {
        this.navCtrl.navigateForward('/addchild');
    }
};
ChildPage = __decorate([
    Component({
        selector: 'app-child',
        templateUrl: './child.page.html',
        styleUrls: ['./child.page.scss'],
    })
], ChildPage);
export { ChildPage };
//# sourceMappingURL=child.page.js.map