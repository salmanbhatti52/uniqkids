import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
let Childprofile1Page = class Childprofile1Page {
    constructor(navCtrl, route, loading, rest) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.loading = loading;
        this.rest = rest;
        this.allergyarr = [];
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
        this.picUrl = 'assets/imgs/plogo.png';
        this.error = {
            status: false,
            message: "",
        };
        this.page = this.route.snapshot.paramMap.get('page');
        this.childid = this.route.snapshot.paramMap.get('childid');
        console.log('childid', this.childid);
        this.parentid = this.route.snapshot.paramMap.get('parentid');
        console.log('parentid', this.parentid);
    }
    ;
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.requestsType) {
            if (this.requestsType === 'child') {
                this.mySegment.nativeElement.children[0].click();
            }
            if (this.requestsType === 'parent') {
                this.mySegment.nativeElement.children[1].click();
            }
        }
        else {
            this.requestsType = 'child';
            this.mySegment.nativeElement.children[0].click();
        }
    }
    segmentChanged(ev) {
        console.log('requestType value', ev.detail.value);
        let data = ev.detail.value;
        this.requestsType = data;
        if (ev.detail.value === 'child') {
            this.requestsType = 'child';
            this.getdetails();
        }
        if (ev.detail.value === 'parent') {
            this.requestsType = 'parent';
            this.getprofiledata();
        }
        localStorage.setItem('requestType', this.requestsType);
    }
    goback() {
        if (this.page == 'requests') {
            this.navCtrl.navigateBack('/requests1');
        }
        else {
            this.navCtrl.navigateBack('/cghomescreen');
        }
    }
    getdetails() {
        this.medicationsarr = [];
        this.foodarr = [];
        this.snackarr = [];
        this.allergyarr = [];
        this.likesarr = [];
        this.dislikesarr = [];
        this.favouritearr = [];
        this.contactsarr = [];
        let senddata = {
            userId: this.parentid,
            childId: this.childid
        };
        this.loading.loadershow();
        this.rest.sendRequest("get_child_details", senddata).subscribe((data) => {
            console.log('get_child_details data::', data);
            this.loading.hideLoader();
            if (data.data.profile_picture == null) {
                this.defaultProfile = 'assets/imgs/child.png';
            }
            else {
                this.defaultProfile = data.data.profile_picture;
            }
            this.childname = data.data.child_name;
            this.age = data.data.age;
            this.diagnosis = data.data.diagnosis;
            this.pediatrician = data.data.pediatrician;
            this.instruction = data.data.special_instructions;
            this.insuranceinfo = data.data.insurance_info;
            this.notes = data.data.additional_notes;
            data.data.allergies.forEach(val => {
                let data = {
                    allergy: val.allergy
                };
                this.allergyarr.push(data);
            });
            console.log('allergyarr', this.allergyarr);
            data.data.medications.forEach(val => {
                let data = {
                    medicationname: val.medication_name,
                    medicationtime: val.medication_time
                };
                this.medicationsarr.push(data);
            });
            console.log('medications', this.medicationsarr);
            data.data.eating_schedule.forEach(val => {
                let data = {
                    eatingtime: val.eating_time,
                    foodname: val.food_name
                };
                this.foodarr.push(data);
            });
            console.log('foodarr', this.foodarr);
            data.data.snacks_schedule.forEach(val => {
                let data = {
                    snackname: val.snack_name,
                    snacktime: val.snack_time
                };
                this.snackarr.push(data);
            });
            console.log('snackarr', this.snackarr);
            data.data.likes.forEach(val => {
                let data = {
                    likes: val.like
                };
                this.likesarr.push(data);
            });
            console.log('likesarr', this.likesarr);
            data.data.dislikes.forEach(val => {
                let data = {
                    dislikes: val.dislike
                };
                this.dislikesarr.push(data);
            });
            console.log('dislikesarr', this.dislikesarr);
            data.data.favourite_activities.forEach(val => {
                let data = {
                    favourite: val.favourite_activity
                };
                this.favouritearr.push(data);
            });
            console.log('favouritearr', this.favouritearr);
            data.data.emergency_contacts.forEach(val => {
                let data = {
                    contact: val.emergency_contact
                };
                this.contactsarr.push(data);
            });
            console.log('contactsarr', this.contactsarr);
        });
    }
    getprofiledata() {
        this.loading.loadershow();
        this.rest.sendRequest("get_profile_details", { userId: this.parentid }).subscribe((data) => {
            console.log('get_profile_details data::', data);
            if (data.status == 'success') {
                console.log('suucesssss');
                this.loading.hideLoader();
                this.fname = data.data.first_name;
                this.lname = data.data.last_name;
                this.email = data.data.email;
                if (data.data.profile_picture == '' || data.data.profile_picture == null) {
                    this.picUrl = 'assets/imgs/plogo.png';
                }
                else {
                    this.picUrl = data.data.profile_picture;
                }
                if (data.data.relation_with_child == '' || data.data.relation_with_child == null) {
                    this.relationwithchild = 'Father/Mother....';
                }
                else {
                    this.relationwithchild = data.data.relation_with_child;
                }
                if (data.data.mobile_number == '' || data.data.mobile_number == null) {
                    this.mobilenumber = 'mobile number';
                }
                else {
                    this.mobilenumber = data.data.mobile_number;
                }
                if (data.data.street_address == '' || data.data.street_address == null) {
                    this.address = 'Address';
                }
                else {
                    this.address = data.data.street_address;
                }
                if (data.data.about == '' || data.data.about == null) {
                    this.about = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr';
                }
                else {
                    this.about = data.data.about;
                }
            }
            if (data.status == 'error') {
                this.loading.hideLoader();
                console.log('signup request data:', data.status);
                this.error.status = true;
                this.error.message = data.message;
                setTimeout(() => {
                    this.error.status = false;
                    this.error.message = "";
                }, 3000);
                return;
            }
        }, (err) => {
        });
    }
};
__decorate([
    ViewChild('mySegment', { read: ElementRef })
], Childprofile1Page.prototype, "mySegment", void 0);
Childprofile1Page = __decorate([
    Component({
        selector: 'app-childprofile1',
        templateUrl: './childprofile1.page.html',
        styleUrls: ['./childprofile1.page.scss'],
    })
], Childprofile1Page);
export { Childprofile1Page };
//# sourceMappingURL=childprofile1.page.js.map