import { Component, OnInit } from '@angular/core';
import { NavController,MenuController} from '@ionic/angular'
@Component({
  selector: 'app-onboarding2',
  templateUrl: './onboarding2.page.html',
  styleUrls: ['./onboarding2.page.scss'],
})
export class Onboarding2Page implements OnInit {

  constructor(public navCtrl: NavController,
  	public menuCtrl:MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
  this.menuCtrl.enable(true);
  }

  gotonext(){
  	this.navCtrl.navigateForward('/registeras');
  }

}
