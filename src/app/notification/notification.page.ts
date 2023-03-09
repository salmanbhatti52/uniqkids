import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import * as moment from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
	userid:any;
  notiarray=[]
  chatdetail=false;
  accounttype:any;
  constructor(public loading:LoadingService,
    public navctrl:NavController,
    private rest: RestService) { 

  	this.userid=localStorage.getItem('uid')
    console.log('userid',this.userid)
    this.accounttype=localStorage.getItem('accountTypeId')
    console.log('accounttype',this.accounttype)
    this.notification();
  }

  ngOnInit() {
  }

  notification(){
  	this.rest.sendRequest("get_notifications", {userId:this.userid}).subscribe(
  		(data:any)=>{
  		console.log('get_notifications',data);
      if(data.status=="success"){
        this.chatdetail=true;
        data.data.forEach(val=>{
          let date=moment(val.created_at).format('YYYY-MM-DD')
           console.log('date',date);
          let time=moment(val.created_at).format('LT')
          console.log('time',time);
          let fields={
            id:val.notification_id,
            notitype:val.notification_type,
            receiver_id:val.receiver_id,
            sender_id:val.sender_id,
            sender_name:val.sender_name,
            message:val.message,
            status:val.status,
            date:date,
            time:time

          }
          this.notiarray.push(fields)
        })
        console.log('notiarray0',this.notiarray)
      }
        
      
      }
    );
  }

  notitype(notificationtype){
    console.log('notificationtype',notificationtype)
    if(notificationtype=='Acceptance'){
      this.navctrl.navigateRoot('requests')
    }
    if(notificationtype=='Rejection'){
      this.navctrl.navigateRoot('requests')
    }
    if(notificationtype=='Hiring'){
      this.navctrl.navigateRoot('requests1')
    }
    if(notificationtype=='Payment'){
      this.navctrl.navigateRoot('paymentto')
    }
  }

}
