import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: 'app-cgviewprofile1',
  templateUrl: './cgviewprofile1.page.html',
  styleUrls: ['./cgviewprofile1.page.scss'],
})
export class Cgviewprofile1Page implements OnInit {
	@ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
	profiletype:any;
  userid:any;
  accountTypeId:any;
  picUrl:any='assets/imgs/profilelogo.png';
  fname:any;
  lname:any;
  email:any;
  mobilenumber:any;
  price:any;
  address:any;
  about:any;
  bankname:any;
  accountnumber:any;

  error = {
    status: false,
    message: "",
  };
  caregiver=[];
  profilepicture:any;
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    private rest: RestService) { 
  
  }

  ionViewDidEnter(){
    
     
  }

  ngOnInit() {
    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);

    this.accountTypeId=localStorage.getItem('accountTypeId');
    console.log('accountTypeId',this.accountTypeId);
  }

  ionViewWillEnter() {
    if (this.profiletype) {
      if (this.profiletype === 'agency') {
        this.mySegment.nativeElement.children[0].click();
        this.getprofiledata(this.userid)
      }
      if (this.profiletype === 'caregiver') {
        this.mySegment.nativeElement.children[1].click();
        this.caregiverdata(this.userid)
      }
    } else {
      this.profiletype = 'agency';
      this.mySegment.nativeElement.children[0].click();
    }
  }

  segmentChanged(ev) {
  	console.log('requestType value',ev.detail.value);
  	let data=ev.detail.value;
  	this.profiletype=data
    if (ev.detail.value === 'agency') {
      this.profiletype = 'agency';
      this.getprofiledata(this.userid)
    }
    if (ev.detail.value === 'caregiver') {
      this.profiletype = 'caregiver';
      this.caregiverdata(this.userid)
    }
    localStorage.setItem('profiletype', this.profiletype);
  }



  getprofiledata(userid){
    this.loading.loadershow();
    this.rest.sendRequest("get_profile_details", {userId:userid}).subscribe(
      (data:any)=>{
       console.log('get_profile_details data::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.fname=data.data.first_name;
         this.lname=data.data.last_name;
         this.email=data.data.email;
         if(data.data.profile_picture=='' || data.data.profile_picture==null){
            this.picUrl='assets/imgs/profilelogo.png';
         }else{
           this.picUrl=data.data.profile_picture;
         }
       
         if(data.data.per_hour_rate=='' || data.data.per_hour_rate==null){
            this.price='None'
         }else{
           this.price=data.data.per_hour_rate
         }
         if(data.data.mobile_number=='' || data.data.mobile_number==null){
            this.mobilenumber='None'
         }else{
           this.mobilenumber=data.data.mobile_number;
         }
         if(data.data.street_address=='' || data.data.street_address==null){
            this.address='None'
         }else{
           this.address=data.data.street_address;
         }
         if(data.data.about=='' || data.data.about==null){
           this.about='None'
         }else{
           this.about=data.data.about
         }
         if(data.data.bank_name=='' || data.data.bank_name==null){
           this.bankname='None'
         }else{
           this.bankname=data.data.bank_name
         }
         if(data.data.account_number=='' || data.data.account_number==null){
           this.accountnumber='None'
         }else{
           this.accountnumber=data.data.account_number
         }
         this.loading.hideLoader();
         
        }
        if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 3000);
          return;
        }
       
      },(err)=>{
        
      }
    );
  }

  caregiverdata(userid){
    this.caregiver=[];
    console.log('....................');
    this.loading.loadershow();
    this.rest.sendRequest("get_agency_caregivers", {agencyId:userid}).subscribe(
      (data:any)=>{
       console.log('get_agency_caregivers data::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.loading.hideLoader();
         data.data.forEach(val=>{
          this.loading.hideLoader();
          if(val.profile_picture==''|| val.profile_picture==null){
            this.profilepicture='assets/imgs/profilelogo.png';
          }else{
            this.profilepicture=val.profile_picture
          }
          let Obj={
            agencyid:val.agency_id,
            caregiverid:val.agency_caregiver_id,
            profile:this.profilepicture, 
            name:val.name,
            price:val.per_hour_rate,
            about:val.about,
          }
          this.caregiver.push(Obj)
        })
        console.log('caregiver array',this.caregiver)
          
        
        }
        if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 3000);
          return;
        }
       
      },(err)=>{
        
      }
    );
  }


  completeprofile(){
  	this.navCtrl.navigateForward('/cgprofile1');
  }
  gotocomplete(){
    this.navCtrl.navigateForward('/cgprofile2');
  }
  gotoprofile(id){
    this.navCtrl.navigateForward(['/profile1',{
      caregiverid:id.caregiverid
    }]);
  }

}
