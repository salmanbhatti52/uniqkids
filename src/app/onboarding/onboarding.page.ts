import { Component, OnInit } from '@angular/core';
import { NavController,MenuController,Platform} from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(public navCtrl: NavController,
  	public menuCtrl:MenuController,
    public platform: Platform,
    public statusbar:StatusBar) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusbar.overlaysWebView(true);
      // set status bar to white
      // this.statusbar.backgroundColorByHexString('#FFFFFF');
      this.statusbar.styleDefault();
      })
  }

   ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
  this.menuCtrl.enable(true);
  }

  gotonext(){
  	this.navCtrl.navigateForward('/onboarding1');
  }

}
