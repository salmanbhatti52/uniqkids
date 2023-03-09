import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: 'app-parentprofileview',
  templateUrl: './parentprofileview.page.html',
  styleUrls: ['./parentprofileview.page.scss'],
})
export class ParentprofileviewPage implements OnInit {
  userid:any;
  accountTypeId:any;
  picUrl:any='assets/imgs/profilelogo.png';
  fname:any;
  lname:any;
  email:any;
  mobilenumber:any;
  relationwithchild:any;;
  address:any;
  about:any;

  error = {
    status: false,
    message: "",
  };
  constructor(public navCtrl: NavController,
  	public menuCtrl:MenuController,
    public loading:LoadingService,
    private rest: RestService) { 

    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);

    this.accountTypeId=localStorage.getItem('accountTypeId');
    console.log('accountTypeId',this.accountTypeId);

    this.getprofiledata();
  }

  getprofiledata(){
    this.loading.loadershow();
    this.rest.sendRequest("get_profile_details", {userId:this.userid}).subscribe(
      (data:any)=>{
       console.log('get_profile_details data::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.loading.hideLoader();
         this.fname=data.data.first_name;
         this.lname=data.data.last_name;
         this.email=data.data.email;
         if(data.data.profile_picture=='' || data.data.profile_picture==null){
            this.picUrl='assets/imgs/profilelogo.png';
         }else{
           this.picUrl=data.data.profile_picture;
         }
       
         if(data.data.relation_with_child=='' || data.data.relation_with_child==null){
            this.relationwithchild='none'
         }else{
           this.relationwithchild=data.data.relation_with_child
         }
         if(data.data.mobile_number=='' || data.data.mobile_number==null){
            this.mobilenumber='none'
         }else{
           this.mobilenumber=data.data.mobile_number;
         }
         if(data.data.street_address=='' || data.data.street_address==null){
            this.address='none'
         }else{
           this.address=data.data.street_address;
         }
         if(data.data.about=='' || data.data.about==null){
           this.about='none'
         }else{
           this.about=data.data.about
         }
         
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

  ngOnInit() {
  }
  
  next(){
  	this.navCtrl.navigateForward('/parentprofile');
  }
}
