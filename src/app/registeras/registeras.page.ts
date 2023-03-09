import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { LoginwithuserService } from "../loginwithuser.service";

@Component({
  selector: 'app-registeras',
  templateUrl: './registeras.page.html',
  styleUrls: ['./registeras.page.scss'],
})
export class RegisterasPage implements OnInit {

  constructor(public navCtrl: NavController,
    public menuCtrl:MenuController,
    public userService: LoginwithuserService) { 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
  this.menuCtrl.enable(true);
  }

  gotologin(){
  	this.navCtrl.navigateRoot('/signin');
  }

  parent(){
     this.userService.setSideMenu("Parent");
     this.userService.userType='Parent'
     console.log('service', this.userService.userType)
     localStorage.setItem('userType', 'Parent');
  	this.navCtrl.navigateRoot('/signup');
  }
  caregiver(){
    this.userService.setSideMenu("caregiver");
    this.userService.userType='caregiver';
    console.log('service', this.userService.userType)
    localStorage.setItem('userType', 'caregiver');
    this.navCtrl.navigateRoot('/cgsignup');
  }
}
