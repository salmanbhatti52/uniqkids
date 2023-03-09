import { Component, OnInit } from '@angular/core';
import { NavController,ModalController} from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
  page:any;
  caregiverid:any;
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

  Id:any;
  error = {
    status: false,
    message: "",
  };
  logeduser:any;
  agencycaregiverid: any;
  constructor(public navCtrl: NavController,
    private route: ActivatedRoute,
    public modal: ModalController,
    public loading:LoadingService,
    private rest: RestService) { }

  ngOnInit() {

    this.logeduser=localStorage.getItem('uid');
     console.log('logeduser',this.logeduser);
  
    this.caregiverid = this.route.snapshot.paramMap.get('caregiverid');
    console.log('caregiverid:',this.caregiverid)

    this.getdetails();
  }


  goback(){
  	
    
  	this.navCtrl.navigateBack('/cgviewprofile1');
  	
  	
  }

  getdetails(){
    let senddata={
      agencyCaregiverId: this.caregiverid,
    }
   this.rest.sendRequest("get_agency_caregiver_detail", senddata).subscribe(
      (data:any)=>{
       console.log('get_agency_caregiver_detail::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.agencycaregiverid=data.data.agency_caregiver_id
         this.fname=data.data.name
         this.email=data.data.email;
         if(data.data.profile_picture=='' || data.data.profile_picture==null){
            this.picUrl=this.picUrl;
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
  next(){
    this.navCtrl.navigateForward('/editcgprofile2');
    localStorage.setItem('agencycaregiverid',this.agencycaregiverid)
  }
}
