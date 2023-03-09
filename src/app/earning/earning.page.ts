import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController,AlertController} from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import * as moment from 'moment';
@Component({
  selector: 'app-earning',
  templateUrl: './earning.page.html',
  styleUrls: ['./earning.page.scss'],
})
export class EarningPage implements OnInit {
	@ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  paymentType:any;
  caregiverid:any;
  image:any;
  earningarray=[];
  desc:any;
  earnings:any;
  constructor(public navCtrl: NavController,
     public alertController:AlertController,
    public loading:LoadingService,
    private rest: RestService) { }

  ngOnInit() {
   this.caregiverid=localStorage.getItem('uid');
  }

  ionViewWillEnter() {
    if (this.paymentType) {
      if (this.paymentType === 'pending') {
        this.mySegment.nativeElement.children[0].click();
        this.pendingdetails();
        this.earningarray=[];
      }
      if (this.paymentType === 'completed') {
        this.mySegment.nativeElement.children[1].click();
         this.completeddetails();
        this.earningarray=[];
      }
    } else {
      this.paymentType = 'pending';
      this.mySegment.nativeElement.children[0].click();
      this.earningarray=[];
    }

    this.totalearning()
  }

  segmentChanged(ev) {
    if (ev.detail.value === 'pending') {
      this.paymentType = 'pending';
      this.pendingdetails();
    }
    if (ev.detail.value === 'completed') {
      this.paymentType = 'completed';
      this.completeddetails();
    }
    localStorage.setItem('requestType', this.paymentType);
  }

  totalearning(){
    this.rest.sendRequest("caregiver_total_earning", {caregiverId:this.caregiverid}).subscribe(
      (data:any)=>{
        console.log('caregiver_total_earning',data)
        this.earnings=data.data
      }
    );
  }
  pendingdetails(){
    this.earningarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("caregiver_pending_earnings", {caregiverId:this.caregiverid}).subscribe(
      (data:any)=>{
        console.log('caregiver_earnings:',data)
        this.loading.hideLoader();
        data.data.forEach(val=>{
          let date=moment(val.date).format('Do MMMM,YYYY')
          console.log('date',date)
          if(val.parent_details.profile_picture==null || val.parent_details.profile_picture==''){
            this.image='assets/imgs/profilelogo.png'
          }else{
            this.image=val.parent_details.profile_picture
          }
          var fixedamount = val.total_payment.toFixed(2)
          console.log('fixed amount',fixedamount)
          let obj={
            caregiverid:val.caregiver_id,
            hiringid:val.hiring_id,
            parentid:val.parent_id,
            profile:this.image,
            fname:val.parent_details.first_name,
            lname:val.parent_details.last_name,
            childname:val.child_name,
            totalamount:fixedamount,
            date:date, 
            status:val.status
          }
          this.earningarray.push(obj)
        })
        console.log('earningarray',this.earningarray)
      }
    );
  }

  completeddetails(){
    this.earningarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("caregiver_completed_earnings", {caregiverId:this.caregiverid}).subscribe(
      (data:any)=>{
        console.log('caregiver_earnings:',data)
        this.loading.hideLoader();
        data.data.forEach(val=>{
          let date=moment(val.date).format('Do MMMM,YYYY')
          console.log('date',date)
          if(val.parent_details.profile_picture==null || val.parent_details.profile_picture==''){
            this.image='assets/imgs/chat.png'
          }else{
            this.image=val.parent_details.profile_picture
          }
          var fixedamount = val.total_payment.toFixed(2)
          console.log('fixed amount',fixedamount)
          let obj={
            caregiverid:val.caregiver_id,
            hiringid:val.hiring_id,
            parentid:val.parent_id,
            profile:this.image,
            fname:val.parent_details.first_name,
            lname:val.parent_details.last_name,
            childname:val.child_name,
            totalamount:fixedamount,
            date:date, 
            status:val.status
          }
          this.earningarray.push(obj)
        })
        console.log('earningarray',this.earningarray)
      }
    );
  }


  viewdetail(pay){
    console.log('innnnnnnnn');
    console.log('caregiverid',pay.caregiverid)
    console.log('parentid',pay.parentid)
    console.log('hiringid',pay.hiringid)
    let sendData={
      hiringId : pay.hiringid,
      parentId:pay.parentid,
      caregiverId:pay.caregiverid
    }
    this.rest.sendRequest("job_details", sendData).subscribe(
    (data:any)=>{
      console.log('job_details::',data)
      this.desc=data.data.comments

      this.popup(this.desc)
    });
    
  }

 async popup(desc){
    const alert = await this.alertController.create({
      cssClass: 'transactionclass',
      message:desc,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          },
          cssClass: 'btn_ok',
        },
      ],
    });
     await alert.present();
  }

  next(){
    // let date=moment(val.date).format('MMMM,YYYY')
    // console.log('date',date)
    this.navCtrl.navigateForward('/paymenthistory1');
  }

}
