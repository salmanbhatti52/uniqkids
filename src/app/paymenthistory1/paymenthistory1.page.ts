import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-paymenthistory1',
  templateUrl: './paymenthistory1.page.html',
  styleUrls: ['./paymenthistory1.page.scss'],
})
export class Paymenthistory1Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

   goback(){
  	this.navCtrl.navigateBack('/earning');
  }
}
