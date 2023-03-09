import { Component, OnInit } from '@angular/core';
import { NavController,MenuController} from '@ionic/angular'
@Component({
  selector: 'app-onboarding1',
  templateUrl: './onboarding1.page.html',
  styleUrls: ['./onboarding1.page.scss'],
})
export class Onboarding1Page implements OnInit {

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
