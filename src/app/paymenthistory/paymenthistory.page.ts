import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.page.html',
  styleUrls: ['./paymenthistory.page.scss'],
})
export class PaymenthistoryPage implements OnInit {
	time:BehaviorSubject<string>=new BehaviorSubject('00:00');
  constructor(public navCtrl: NavController) { }
   timer:number;
  ngOnInit() {
	
  }

  goback(){
  	this.navCtrl.navigateBack('/payment');
  }

//   starttimer(duration:number){
//   	this.timer=duration * 60;
//   	console.log('timer',this.timer)
//   	setInterval(()=>{
//   		this.updatetimevalue()
//   	},1000)
//   }

//   updatetimevalue(){
//   	let hours:any=this.timer / 3600;
//   	let minutes:any=this.timer  % 3600 / 60;
//   	let seconds:any=this.timer % 60;

//   	hours=String('0'+ Math.floor(hours)).slice(-2);
//   	minutes=String('0'+ Math.floor(minutes)).slice(-2);
//   	seconds=String('0'+ Math.floor(seconds)).slice(-2);

//   	const text=hours +':'+ minutes;

//   	this.time.next(text);

//   	--this.timer;

//   	if(this.timer<0){
//   		this.starttimer(5)
//   	}
//   }



}
