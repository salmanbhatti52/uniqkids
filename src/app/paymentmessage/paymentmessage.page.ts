import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,NavParams} from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-paymentmessage',
  templateUrl: './paymentmessage.page.html',
  styleUrls: ['./paymentmessage.page.scss'],
})
export class PaymentmessagePage implements OnInit {
  caregiverid:any;
  parentid:any;
  hiringid:any;
  comments:any;
  totalamount:any;
  constructor(public modal: ModalController,
    public navParams:NavParams,
    public navCtrl: NavController,
    public loading:LoadingService,
    private rest: RestService) { 

    this.parentid=this.navParams.get('parentid')
    console.log('parentid',this.parentid)

    this.caregiverid=this.navParams.get('caregiverid')
    console.log('caregiverid',this.caregiverid)

    this.hiringid=this.navParams.get('hiringid')
    console.log('hiringid',this.hiringid);

    this.totalamount=this.navParams.get('amount');
    console.log('totalamount',this.totalamount);
  }

  ngOnInit() {
  }

  Completed(){
    let sendata={
      parentId:this.parentid,
      hiringId:this.hiringid,
      caregiverId:this.caregiverid,
      comments:this.comments,
      amount:this.totalamount

     }
     this.rest.sendRequest("complete_job", sendata).subscribe(
     (data:any)=>{
       if(data.status=='success'){
        this.modal.dismiss(data).then(res=>{
          console.log('modal res',res)
          console.log('complete_job::',sendata)
          this.loading.presentToast('Request Completed')
        })
       }
       if(data.status=='error'){
         this.loading.presentToast(data.message)
       }
       
     });
  
  }

  Cancel(){
  	this.modal.dismiss().then(res=>{
  		console.log('modal res',res)
  	})
  }

}
