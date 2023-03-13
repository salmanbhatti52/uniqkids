import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { NavController } from "@ionic/angular";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: "app-deleteacc",
  templateUrl: "./deleteacc.page.html",
  styleUrls: ["./deleteacc.page.scss"],
})
export class DeleteaccPage implements OnInit {
  Checkboxes = [
    { question: "I concerned about my personal data", isItemChecked: false },
    { question: "I have another  UniqKidz account", isItemChecked: false },
    { question: "I want to remove app from my mobile", isItemChecked: false },
    { question: "I get too many emails from UniqKidz", isItemChecked: false },
    { question: "Other", isItemChecked: false },
  ];

  selectquestions = [];
  constructor(
    public rest: RestService,
    public loacton: Location,
    public navCtrl: NavController,
    public basicmsg: LoadingService
  ) {}

  ngOnInit() {}

  goBack() {
    this.loacton.back();
  }
  verifyEvent(ev) {
    console.log(ev);
    if (ev.isItemChecked == true) {
      this.selectquestions.push(ev.question);
      console.log("selectquestions aray", this.selectquestions);
    }
    if (ev.isItemChecked == false) {
      const index = this.selectquestions.indexOf(ev.question);
      if (index > -1) {
        this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
        console.log("job aray", this.selectquestions);
      }
    }
  }

  delete() {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("userrrrrrrrrrrrrr", user.email);
    if (this.selectquestions.length == 0) {
      this.basicmsg.presentToast("Choose one option atleast");
    } else {
      const del = {
        email: user.email,
      };
      this.rest.sendRequest("delete_account", del).subscribe((res: any) => {
        console.log("report user result==", res);
        if (res.status == "success") {
          this.basicmsg.presentToast(res.data);
          localStorage.clear();
          this.navCtrl.navigateRoot("/");
        }
        if (res.status == "error") {
          this.basicmsg.presentToast(res.message);
        }
      });
    }
  }
}
