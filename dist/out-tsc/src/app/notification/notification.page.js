import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
let NotificationPage = class NotificationPage {
    constructor(loading, rest) {
        this.loading = loading;
        this.rest = rest;
        this.notiarray = [];
        this.userid = localStorage.getItem('uid');
        console.log('userid', this.userid);
        this.notification();
    }
    ngOnInit() {
    }
    notification() {
        this.rest.sendRequest("get_notifications", { userId: this.userid }).subscribe((data) => {
            console.log('get_notifications', data);
            data.data.forEach(val => {
                let date = moment(val.created_at).format('YYYY-MM-DD');
                console.log('date', date);
                let time = moment(val.created_at).format('LT');
                console.log('time', time);
                let fields = {
                    id: val.notification_id,
                    receiver_id: val.receiver_id,
                    sender_id: val.sender_id,
                    sender_name: val.sender_name,
                    message: val.message,
                    status: val.status,
                    date: date,
                    time: time
                };
                this.notiarray.push(fields);
            });
            console.log('notiarray0', this.notiarray);
        });
    }
};
NotificationPage = __decorate([
    Component({
        selector: 'app-notification',
        templateUrl: './notification.page.html',
        styleUrls: ['./notification.page.scss'],
    })
], NotificationPage);
export { NotificationPage };
//# sourceMappingURL=notification.page.js.map