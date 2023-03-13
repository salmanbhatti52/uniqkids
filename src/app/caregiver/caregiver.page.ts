import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: "app-caregiver",
  templateUrl: "./caregiver.page.html",
  styleUrls: ["./caregiver.page.scss"],
})
export class CaregiverPage implements OnInit {
  caregiver = [];
  type: any;
  profilepicture: any;
  error = {
    status: false,
    message: "",
  };
  filterTerm: string;
  searchval: any;
  status: any;
  caregivers = false;
  constructor(
    public navCtrl: NavController,
    public loading: LoadingService,
    private rest: RestService
  ) {}

  ngOnInit() {
    // this.caregivers();
  }

  ionViewDidEnter() {}

  search(ev) {
    this.searchval = ev.detail.value;
    console.log("get value from search:::", this.searchval);
    this.rest
      .sendRequest("get_all_filtered_caregivers", {
        dataFilter: this.searchval,
      })
      .subscribe((data: any) => {
        console.log("search data from api::", data);
        this.status = data.status;
        if (data.status == "success") {
          this.caregivers = true;
          this.caregiver = [];
          data.data.forEach((val) => {
            this.loading.hideLoader();
            if (val.account_type_id == 2) {
              this.type = "Professional";
            }
            if (val.account_type_id == 3) {
              this.type = "Family";
            }
            if (val.account_type_id == 4) {
              this.type = "Agency";
            }
            if (val.profile_picture == "" || val.profile_picture == null) {
              this.profilepicture = "assets/imgs/profilelogo.png";
            } else {
              this.profilepicture = val.profile_picture;
            }
            let Obj = {
              userid: val.users_id,
              typeid: val.account_type_id,
              profile: this.profilepicture,
              fname: val.first_name,
              lname: val.last_name,
              price: val.per_hour_rate,
              about: val.about,
              caregivertype: this.type,
              address: val.street_address,
              availability: val.availability,
            };

            this.caregiver.push(Obj);
          });
          console.log("caregiver array", this.caregiver);
        }
        if (data.status == "error") {
          this.loading.hideLoader();
          this.caregiver = [];

          console.log("signup request data:", data.status);
          this.error.status = true;
          this.error.message = data.message;
          // setTimeout(() => {
          //   this.error.status = false;
          //   this.error.message = "";
          // }, 3000);
          return;
        }
      });
  }

  // caregivers(){
  //   // this.caregiver=[];
  //   this.loading.loadershow();
  //   this.rest.getRequest("get_all_caregivers",{}).subscribe(
  //     (data:any)=>{
  //       console.log('get_all_caregivers data::',data);
  //       if(data.status=='success'){
  //         data.data.forEach(val=>{
  //           this.loading.hideLoader();
  //           if(val.account_type_id==2){
  //             this.type='Professional'
  //           }
  //           if(val.account_type_id==3){
  //             this.type='Family'
  //           }
  //           if(val.account_type_id==4){
  //             this.type='Agency'
  //           }
  //           if(val.profile_picture==''|| val.profile_picture==null){
  //             this.profilepicture='assets/imgs/profilelogo.png';
  //           }else{
  //             this.profilepicture=val.profile_picture
  //           }
  //           let Obj={
  //             userid:val.users_id,
  //             typeid:val.account_type_id,
  //             profile:this.profilepicture,
  //             fname:val.first_name,
  //             lname:val.last_name,
  //             price:val.per_hour_rate,
  //             about:val.about,
  //             caregivertype:this.type,
  //             address:val.street_address
  //           }
  //           this.caregiver.push(Obj)
  //         })
  //         console.log('caregiver array',this.caregiver)
  //       }
  //       if(data.status=='error'){
  //         this.loading.hideLoader();
  //         console.log('signup request data:',data.status);
  //           this.error.status = true;
  //         this.error.message = data.message;
  //         setTimeout(() => {
  //           this.error.status = false;
  //           this.error.message = "";
  //         }, 3000);
  //         return;
  //       }

  //     }
  //   );
  // }

  gotoprofile(care) {
    this.navCtrl.navigateForward([
      "/profile",
      {
        page: "caregiver",
        userid: care.userid,
      },
    ]);
  }
}
