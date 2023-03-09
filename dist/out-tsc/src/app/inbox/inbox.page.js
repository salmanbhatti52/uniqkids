import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import * as moment from 'moment';
let InboxPage = class InboxPage {
    constructor(navCtrl, activatedRoute) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.messages = [];
        this.data = { type: '', name: '', message: '' };
    }
    ngOnInit() {
        this.logeduser = JSON.parse(localStorage.getItem('user'));
        console.log('loagged details', this.logeduser);
        this.loggedid = this.logeduser.users_id;
        console.log('loagged details', this.loggedid);
        this.caregiverid = this.activatedRoute.snapshot.params["id"];
        console.log('caregiverid', this.caregiverid);
    }
    goback() {
        this.navCtrl.navigateBack('/chat');
    }
    sendMessage() {
        console.log('inmessages');
        if (this.data.message != '') {
            var d = moment().format('LLLL');
            let splitdate = d.split(',');
            let date = splitdate[1];
            let time = moment().format('LT');
            console.log('date', splitdate);
            let dateformatted = time;
            console.log('formatted date', dateformatted);
            console.log('user ids are = ', this.loggedid, this.caregiverid);
            if (this.loggedprofile == '' || this.loggedprofile == null) {
                this.profile = 'assets/imgs/chat.png';
            }
            else {
                this.profile = this.loggedprofile;
            }
            let messsage = {
                id: this.loggedid,
                profile: this.profile,
                message: this.data.message,
                date: dateformatted
            };
            this.messages.push(messsage);
            this.myContent.scrollToBottom(300);
            let fiedlstosend = {
                sender_id: this.loggedid,
                receiver_id: this.caregiverid,
                message: this.data.message,
                date: dateformatted
            };
            // this.global.sendRequest('sendmessage',fiedlstosend).then(response => {
            //   console.log(response);
            // });
            this.data.message = '';
        }
    }
};
__decorate([
    ViewChild(IonContent)
], InboxPage.prototype, "content", void 0);
__decorate([
    ViewChild(IonContent, { read: IonContent, static: false })
], InboxPage.prototype, "myContent", void 0);
__decorate([
    ViewChild('allnewmessages')
], InboxPage.prototype, "allnewmessages", void 0);
InboxPage = __decorate([
    Component({
        selector: 'app-inbox',
        templateUrl: './inbox.page.html',
        styleUrls: ['./inbox.page.scss'],
    })
], InboxPage);
export { InboxPage };
//# sourceMappingURL=inbox.page.js.map