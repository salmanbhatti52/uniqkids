import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  showPass = false;
  showcPass = false;

  recoveryEmail: any;
  newPassword: any;
  confirmPassword: any;
  newPassError = {
    status: false,
    message: '',
  };
  confPassError = {
    status: false,
    message: '',
  };
  error = {
    status: false,
    message: '',
  };
  constructor(public navCtrl: NavController,
    public menuCtrl:MenuController,
    private activatedRoute:ActivatedRoute,
    private rest: RestService) { 

    this.recoveryEmail=this.activatedRoute.snapshot.params['email'];
    console.log('recoveryEmail::',this.recoveryEmail)
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

  goback(){
    this.navCtrl.navigateBack('/otp');
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
  togglecPass() {
    this.showcPass = !this.showcPass;
  }


  gotologin(){
    if (this.newPassword && this.confirmPassword) {
      if (this.newPassword === this.confirmPassword) {
       
        this.rest
          .sendRequest('forgot_password', {
            requestType: 'reset_password',
            email: this.recoveryEmail,
            userPassword: this.newPassword,
            confirmPassword:this.confirmPassword
          })
          .subscribe(
            async (data: any) => {
              this.newPassword = '';
              this.confirmPassword = '';
              this.navCtrl.navigateForward('/signin');
            },
            (err) => {
              
              this.error.status = true;
              this.error.message = err.error.message;
              setTimeout(() => {
                this.error.status = false;
                this.error.message = '';
              }, 3000);
            }
          );
      } else {
        this.confPassError.status = true;
        this.confPassError.message = 'Password not match!';
        setTimeout(() => {
          this.confPassError.status = false;
          this.confPassError.message = '';
        }, 3000);
      }
    }
    if (!this.newPassword) {
      this.newPassError.status = true;
      this.newPassError.message = 'Password is required';
    }
    if (!this.confirmPassword) {
      this.confPassError.status = true;
      this.confPassError.message = 'Confirm Password is required';
    }
    setTimeout(() => {
      this.newPassError.status = false;
      this.newPassError.message = '';
      this.confPassError.status = false;
      this.confPassError.message = '';
    }, 3000);
  }
}
