import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginwithuserService {
  userType: any;
  appPages = [];
  constructor() {
    console.log("medication");
  }
  setSideMenu(type) {
    if (type === "Parent") {
      this.userType = "Parent";
      this.appPages = [
        {
          title: "Profile",
          url: "/parentprofileview",
          img: "/assets/imgs/icons/user.svg",
        },
        { title: "Child", url: "/child", img: "/assets/imgs/icons/child.svg" },
        {
          title: "Caregiver",
          url: "/caregiver",
          img: "/assets/imgs/icons/caregiver.svg",
        },
        { title: "Chat", url: "/chat", img: "/assets/imgs/icons/chat.svg" },
        {
          title: "Payment",
          url: "/paymentto",
          img: "/assets/imgs/icons/payment.svg",
        },
        {
          title: "Notifications",
          url: "/notification",
          img: "/assets/imgs/icons/notification.svg",
        },
        {
          title: "Requests",
          url: "/requests",
          img: "/assets/imgs/icons/requests.svg",
        },
        {
          title: "Terms and Condition",
          url: "/termsandcondition",
          img: "/assets/imgs/icons/term.svg",
        },
        {
          title: "Delete Account",
          url: "/deleteacc",
          img: "/assets/imgs/icons/trash.svg",
        },
        // { title: 'payemntsssssss', url: '/paymenthistory', img: '/assets/imgs/icons/term.svg' },
      ];
    }
    if (type === "Professional") {
      this.userType = "Professional";
      this.appPages = [
        {
          title: "Profile",
          url: "/cgviewprofile",
          img: "/assets/imgs/icons/user.svg",
        },
        {
          title: "Requests",
          url: "/requests1",
          img: "/assets/imgs/icons/requests.svg",
        },
        { title: "Chat", url: "/chat", img: "/assets/imgs/icons/chat.svg" },
        {
          title: "Earnings",
          url: "/earning",
          img: "/assets/imgs/icons/money.svg",
        },
        {
          title: "Notifications",
          url: "/notification",
          img: "/assets/imgs/icons/notification.svg",
        },
        {
          title: "Terms and Condition",
          url: "/termsandcondition",
          img: "/assets/imgs/icons/term.svg",
        },
        {
          title: "Delete Account",
          url: "/deleteacc",
          img: "/assets/imgs/icons/trash.svg",
        },
      ];
    }
    if (type === "Family") {
      this.userType = "Family";
      this.appPages = [
        {
          title: "Profile",
          url: "/cgviewprofile",
          img: "/assets/imgs/icons/user.svg",
        },
        {
          title: "Requests",
          url: "/requests1",
          img: "/assets/imgs/icons/requests.svg",
        },
        { title: "Chat", url: "/chat", img: "/assets/imgs/icons/chat.svg" },
        {
          title: "Notifications",
          url: "/notification",
          img: "/assets/imgs/icons/notification.svg",
        },
        {
          title: "Terms and Condition",
          url: "/termsandcondition",
          img: "/assets/imgs/icons/term.svg",
        },
        {
          title: "Delete Account",
          url: "/deleteacc",
          img: "/assets/imgs/icons/trash.svg",
        },
      ];
    }
    if (type === "Agency") {
      this.userType = "Agency";
      this.appPages = [
        {
          title: "Profile",
          url: "/cgviewprofile1",
          img: "/assets/imgs/icons/profile.svg",
        },
        {
          title: "Requests",
          url: "/requests1",
          img: "/assets/imgs/icons/requests.svg",
        },
        { title: "Chat", url: "/chat", img: "/assets/imgs/icons/chat.svg" },
        {
          title: "Earnings",
          url: "/earning",
          img: "/assets/imgs/icons/money.svg",
        },
        {
          title: "Notifications",
          url: "/notification",
          img: "/assets/imgs/icons/notification.svg",
        },
        {
          title: "Terms and Condition",
          url: "/termsandcondition",
          img: "/assets/imgs/icons/term.svg",
        },
        {
          title: "Delete Account",
          url: "/deleteacc",
          img: "/assets/imgs/icons/trash.svg",
        },
      ];
    }
  }
}
