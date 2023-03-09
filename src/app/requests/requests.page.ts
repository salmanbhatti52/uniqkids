import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  requestsType:any;
  parentid:any;
  defaultProfile:any;
  requestsarray=[];
   error = {
    status: false,
    message: "",
  };
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    private rest: RestService) { 

    this.parentid=localStorage.getItem('uid');
    console.log('parent id :',this.parentid);
    // this.showrequest();
  }

 ionViewWillEnter() {
    if (this.requestsType) {
      if (this.requestsType === 'current') {
        this.mySegment.nativeElement.children[0].click();
        console.log('click event',this.mySegment.nativeElement.children[0].click())
      }
      if (this.requestsType === 'pending') {
        this.mySegment.nativeElement.children[1].click();
      }
      if (this.requestsType === 'previous') {
        this.mySegment.nativeElement.children[2].click();
      }
    } else {
      this.requestsType = 'current';
      this.mySegment.nativeElement.children[0].click();
    }
  }
  ngOnInit() {
    
  }

  segmentChanged(ev) {
    if (ev.detail.value === 'current') {
      this.requestsType = 'current';
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


  showrequest(){
    this.requestsarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("parent_requests", {parentId:this.parentid}).subscribe(
      (data:any)=>{
        console.log('parent_requests',data);
         if(data.status=='success'){
           this.loading.hideLoader();
           data.data.forEach(val=>{ 
             if(val.child_details.profile_picture==null || val.child_details.profile_picture==''){
               this.defaultProfile='assets/imgs/profilelogo.png';
             }else{
               this.defaultProfile=val.child_details.profile_picture
             }
             let data={
               caregiverid:val.caregiver_id,
               fname:val.caregiver_details.first_name,
               lname:val.caregiver_details.last_name,
               price:val.caregiver_details.per_hour_rate,
               profile:this.defaultProfile,
               childid:val.child_details.child_id,
               parentid:val.child_details.parent_id,
               childname:val.child_details.child_name,
               starttime:val.start_time,
               endtime:val.end_time,
               status:val.status,
               hiringid:val.hiring_id,
               about:val.caregiver_details.about,
               date:val.date
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

  gotoprofile(req){
    this.navCtrl.navigateForward(['/profile',{
      page:'requests',
      userid:req.caregiverid
    }]);
  }

}
