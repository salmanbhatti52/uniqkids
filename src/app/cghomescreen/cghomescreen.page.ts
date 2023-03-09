import { Component, OnInit } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { LoadingService } from '../services/loading.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-cghomescreen',
  templateUrl: './cghomescreen.page.html',
  styleUrls: ['./cghomescreen.page.scss'],
})
export class CghomescreenPage implements OnInit {
  accountid: any;
  userid: any;
  user: any;
  name: any;

  defaultProfile: any;
  caregiverid: any;
  childsarray=[];

  picture=false;
  error = {
    status: false,
    message: '',
  };
  caregiverProfile: any='assets/imgs/profilelogo.png';
  constructor(public navCtrl: NavController,
    public loading: LoadingService,
    private rest: RestService,
    public platform: Platform,
    public statusbar: StatusBar) {

    this.accountid = localStorage.getItem('accountTypeId');
    console.log('accountid:',this.accountid);

     this.user=JSON.parse(localStorage.getItem('user'));

     console.log('user details',this.user);

     this.name=this.user.first_name;
     console.log('first_name',this.name);
     this.userid=this.user.users_id;
     console.log('caaregiver id:',this.userid);



  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusbar.overlaysWebView(true);
      // set status bar to white
      // this.statusbar.backgroundColorByHexString('#FFFFFF');
      this.statusbar.styleDefault();
    });
  }

  goto(){

    this.navCtrl.navigateForward('/cgprofile');


  }

  ionViewWillEnter(){
    this.getprofile();

    // if(details==null){
    //   this.caregiverProfile=this.caregiverProfile;
    // }else{
    //   this.caregiverProfile=details.profile_picture;
    // }
    this.showchild();
  }

  getprofile(){
    this.rest.sendRequest('get_profile_picture', {userId:this.userid}).subscribe(
      (data: any)=>{
        console.log('profile get data:',data);
        if(data.data.profile_picture==null || data.data.profile_picture==''){
        this.caregiverProfile=this.caregiverProfile;
        }else{
          this.caregiverProfile=data.data.profile_picture;
        }
      }
    );
  }

  showchild(){
    this.childsarray=[];
    this.loading.loadershow();
    this.rest.sendRequest('caregiver_requests', {caregiverId:this.userid}).subscribe(
      (data: any)=>{
        console.log('caregiver_requests',data);
         this.loading.hideLoader();
        if(data.status=='success'){

           data.data.forEach(val=>{

             if(val.child_details.profile_picture==null || val.child_details.profile_picture==''){
               this.defaultProfile='assets/imgs/profilelogo.png';
             }else{
               this.defaultProfile=val.child_details.profile_picture;
             }

             const data={

               parentid:val.parent_id,
               fname:val.parent_details.first_name,
               lname:val.parent_details.last_name,
               age:val.child_details.age,
               profile:this.defaultProfile,
               childid:val.child_id,
               childname:val.child_details.child_name,
               starttime:val.start_time,
               endtime:val.end_time,
               status:val.status,
               date:val.date,
               about:val.child_details.additional_notes
             };
             if(val.status=='Active'){
                this.childsarray.push(data);
               this.picture=true;
             }
           });
           console.log('requestsarray:',this.childsarray);
         }
         if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = '';
          }, 3000);
          return;
        }
      }
    );
  }


  gotoprofile(child){
    console.log('profile..........":');
    this.navCtrl.navigateForward(['/childprofile1',{
      parentid:child.parentid,
      childid:child.childid
    }]);
  }

}
