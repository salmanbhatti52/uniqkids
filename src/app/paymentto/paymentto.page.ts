import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController,ModalController,AlertController } from '@ionic/angular';
import { PaymentmessagePage } from '../paymentmessage/paymentmessage.page';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import * as moment from 'moment';
@Component({
  selector: 'app-paymentto',
  templateUrl: './paymentto.page.html',
  styleUrls: ['./paymentto.page.scss'],
})
export class PaymenttoPage implements OnInit {
    @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
    paymentType:any;
    uid:any;
    paymentarray=[];
    desc:any;
    image:any;
    time:any;
    time1='09:51'

    textdetail=false;
    textdetail2=false;
  constructor(public navCtrl: NavController,
    public modalController:ModalController,
    public alertController:AlertController,
    public loading:LoadingService,
    private rest: RestService) { }

  ngOnInit() {
    this.uid=localStorage.getItem('uid');
    console.log('userid',this.uid)

    
  }

  ionViewWillEnter() {
    if (this.paymentType) {
      if (this.paymentType === 'pending') {
        this.mySegment.nativeElement.children[0].click();
         this.pendingdetails();
         this.paymentarray=[];
      }
      if (this.paymentType === 'completed') {
        this.mySegment.nativeElement.children[1].click();
         this.completeddetails();
         this.paymentarray=[];
      }
    } else {
      this.paymentType = 'pending';
      this.mySegment.nativeElement.children[0].click();
        this.paymentarray=[];
    }
   
  }

  pendingdetails(){
    this.paymentarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("parent_pending_payments", {parentId:this.uid}).subscribe(
      (data:any)=>{
        console.log('get data:',data)
        if(data.status=="success"){
          this.textdetail=true;
          this.loading.hideLoader();
          data.data.forEach(val=>{
            let date=moment(val.date).format('MMMM,YYYY')
            console.log('date',date)
            this.time=moment(new Date()).format('hh:mm');
            console.log('time',this.time)
            if(val.caregiver_details.profile_picture=='' || val.caregiver_details.profile_picture==null){
                this.image='assets/imgs/profilelogo.png'
              }else{
                this.image=val.caregiver_details.profile_picture
              }
              var fixedamount = val.total_payment.toFixed(2)
              console.log('fixed amoubt',fixedamount)
            let obj={
              caregiverid:val.caregiver_details.users_id,
              hiringid:val.hiring_id,
              parentid:val.parent_id,
              profile:this.image,
              fname:val.caregiver_details.first_name,
              lname:val.caregiver_details.last_name,
              hourrate:val.caregiver_details.per_hour_rate,
              totalamount:fixedamount,
              date:date, 
              status:val.status,
              time:val.end_time
            }
            this.paymentarray.push(obj)
          })
          console.log('paymentarray',this.paymentarray)
        }
        if(data.status=="error"){
          this.loading.hideLoader();
        }
       
      }
    );
  }
  completeddetails(){
    this.paymentarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("parent_completed_payments", {parentId:this.uid}).subscribe(
      (data:any)=>{
        console.log('get data:',data)
       
        if(data.status=="success"){
          this.loading.hideLoader();
          this.textdetail2=true;
          data.data.forEach(val=>{
            let date=moment(val.date).format('Do MMMM,YYYY')
            console.log('date',date)
            if(val.caregiver_details.profile_picture=='' || val.caregiver_details.profile_picture==null){
                this.image='assets/imgs/profilelogo.png'
              }else{
                this.image=val.caregiver_details.profile_picture
              }
              var fixedamount = val.total_payment.toFixed(2)
              console.log('fixed amount',fixedamount)
            let obj={
              caregiverid:val.caregiver_details.users_id,
              hiringid:val.hiring_id,
              parentid:val.parent_id,
              profile:this.image,
              fname:val.caregiver_details.first_name,
              lname:val.caregiver_details.last_name,
              hourrate:val.caregiver_details.per_hour_rate,
              totalamount:fixedamount,
              date:date, 
              status:val.status
            }
            this.paymentarray.push(obj)
          })
          console.log('paymentarray',this.paymentarray)
        }
        if(data.status=="error"){
          this.loading.hideLoader();
        }
       
      }
    );
  }

  segmentChanged(ev) {
   
    if (ev.detail.value === 'pending') {
      this.paymentType = 'pending';
       this.pendingdetails()
       
    }
    if (ev.detail.value === 'completed') {
      this.paymentType = 'completed';
      this. completeddetails()
     
    }
    localStorage.setItem('paymentType', this.paymentType);
  }
  next(){
  	this.navCtrl.navigateForward('/paymenthistory');
  }

  send(){
  	this.navCtrl.navigateForward('/paymenthistory');
  }

  async presentModal(pay) {
    console.log('caregiverid',pay.caregiverid)
    console.log('parentid',pay.parentid)
    console.log('hiringid',pay.hiringid)
    const modal = await this.modalController.create({
      component: PaymentmessagePage,
      cssClass: 'paymentclass',
      componentProps: {
        parentid: pay.parentid,
        caregiverid: pay.caregiverid,
        hiringid: pay.hiringid,
        amount:pay.totalamount
      }
    });
    modal.onDidDismiss().then((data)=>{
      console.log('data',data)
      if(data.data.data=="Transaction successful"){
        this.ionViewWillEnter();
        console.log('in dismiss modal')
      }
    });
    return await modal.present();
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

}
