import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import * as moment from 'moment';
@Component({
  selector: 'app-requests1',
  templateUrl: './requests1.page.html',
  styleUrls: ['./requests1.page.scss'],
})
export class Requests1Page implements OnInit {
	@ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType:any;
  defaultProfile:any;
  caregiverid:any;
  requestsarray=[];

  error = {
    status: false,
    message: "",
  };
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    private rest: RestService) { 

    this.caregiverid=localStorage.getItem('uid');
    console.log('caregiver id :',this.caregiverid);
  }

  ngOnInit() {

    
  }

  ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'active') {
        this.mySegment.nativeElement.children[0].click();
        this.showrequest()
      }
      if (this.requestsType === 'pending') {
        this.mySegment.nativeElement.children[1].click();
        this.showrequest()
      }
      if (this.requestsType === 'previous') {
        this.mySegment.nativeElement.children[2].click();
        this.showrequest()
      }
    } else {
      this.requestsType = 'active';
      this.mySegment.nativeElement.children[0].click();
      // this.showrequest()
    }
  }

  segmentChanged(ev) {
    if (ev.detail.value === 'active') {
      this.requestsType = 'active';
      this.showrequest();
      this.requestsarray=[];
    }
    if (ev.detail.value === 'pending') {
      this.requestsType = 'pending';
      this.showrequest();
       this.requestsarray=[];
    }
    if (ev.detail.value === 'previous') {
      this.requestsType = 'previous';
      this.showrequest();
      this.requestsarray=[];
    }
    localStorage.setItem('requestType', this.requestsType);
  }

  // gotoprofile(){
  //   this.navCtrl.navigateForward(['/childprofile1',{
  //     page:'requests'
  //   }]);
  // }

  showrequest(){
    this.requestsarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("caregiver_requests", {caregiverId:this.caregiverid}).subscribe(
      (data:any)=>{
        console.log('caregiver_requests',data);
        if(data.status=='success'){
          this.loading.hideLoader();
           data.data.forEach(val=>{ 
            //  let date=val.date
            //  let date1=moment(date).format('D MMM YYYY'); 
            //  console.log('formatted date',date1)
             if(val.child_details.profile_picture==null || val.child_details.profile_picture==''){
               this.defaultProfile='assets/imgs/profilelogo.png';
             }else{
               this.defaultProfile=val.child_details.profile_picture
             }
             let data={
               parentid:val.parent_id,
               relationwithchild:val.parent_details.relation_with_child,
               fname:val.parent_details.first_name,
               lname:val.parent_details.last_name,
               profile:this.defaultProfile,
               childid:val.child_id,
               childname:val.child_details.child_name,
               starttime:val.start_time,
               endtime:val.end_time,
               status:val.status,
               hiringid:val.hiring_id,
               caregiverid:val.caregiver_id,
               date:val.date,
               about:val.child_details.additional_notes
             }
             this.requestsarray.push(data)
           })
           console.log('requestsarray:',this.requestsarray)
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
      }
    );
  }

  accept(req){
    console.log('request data to get ids',req);
    let sendData={
      childId:req.childid,
      hiringId: req.hiringid,
      caregiverId:req.caregiverid,

    }
    this.rest.sendRequest("accept_request", sendData).subscribe(
      (data:any)=>{
        console.log('accept request:',data)
        if(data.status=="success"){
          this.navCtrl.navigateForward(['/childprofile1',{
            page:'requests',
            parentid:req.parentid,
            childid:req.childid
          }]);
        }
        if(data.status=="error"){
          this.loading.presentToast(data.message)
        }
        
      }
    );
  }

  reject(req){
    console.log('request data to get ids',req);
    let sendData={
      childId:req.childid,
      hiringId: req.hiringid,
      caregiverId:req.caregiverid,

    }
    this.rest.sendRequest("reject_request", sendData).subscribe(
      (data:any)=>{
        console.log('reject request:',data)
        this.navCtrl.navigateForward(['/childprofile1',{
          page:'requests',
          parentid:req.parentid,
          childid:req.childid
        }]);
      }
    );
  }

  gotoprofile(req){
    console.log('profile..........":')
    this.navCtrl.navigateForward(['/childprofile1',{
      page:'requests',
      parentid:req.parentid,
      childid:req.childid
    }]);
  }

}
