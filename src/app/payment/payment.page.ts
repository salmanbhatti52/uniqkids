import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from "../services/loading.service";
import { RestService } from "../services/rest.service";

import { Stripe } from '@ionic-native/stripe/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  key:any="pk_test_51Jd7p8KKitfWkXX45bQUGt47Aw7vsNTBrBufqCjci6Fm4VDy4f1RDnddDERJUNJqzPCwNfcyeTqkKPL4vAYI33WV00GepwDG5a"
  cardDetails={
    name:'',
    cardnumber:'',
    cvv:'',
    expdate:''
  }
  selectdate:any;
  year:any;
  month:any;
  expdate:any;

  nameError={
    status: false,
    message: "",
  }
  cardnumberError={
    status: false,
    message: "",
  }
  cvvError={
    status: false,
    message: "",
  }
  expdateError={
    status: false,
    message: "",
  }
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    private stripe: Stripe) { }

  ngOnInit() {
  }

  next(){
    	this.navCtrl.navigateForward('/paymenthistory');
  }

   selectdata(){
    this.selectdate= moment(this.expdate).format('YY-MM-DD')

    console.log('date',this.selectdate)
    const splitdate = this.selectdate.split("-");
    console.log('year',splitdate[0])
    this.year=splitdate[0]
    
     const splitdate1= this.selectdate.split("-");
    console.log('month',splitdate1[1])
    this.month=splitdate1[1]

    // this.expdate=this.month+'/'+this.year
    // console.log('expdate',this.expdate)
  }

  paymentto(){
   

     this.navCtrl.navigateForward('/paymentto');
  	
  }


  savecard(){
    // if(this.cardDetails.name &&this.cardDetails.cardnumber && this.cardDetails.cvv &&this.expdate){
    //   this.stripe.setPublishableKey(this.key);
    //   let details = {
    //     number: this.cardDetails.cardnumber,//'4242424242424242'
    //     expMonth: this.month,
    //     expYear: this.year,
    //     cvc: this.cardDetails.cvv
    //   }

    //   this.stripe.createCardToken(details)
    //   .then(token => {
    //     console.log(token);
    //     console.log('token id',token.id)
    //     // this.makePayment(token.id);
    //     // this.navCtrl.navigateForward('/paymentto');
    //   })
    //   .catch(error =>{
    //     console.error(error);
    //     this.loading.presentToast(error)
    //   })
    // }
    // if (!this.cardDetails.name) {
    //   this.nameError.status = true;
    //   this.nameError.message = 'Enter card holder name';
    // }
    // if (!this.cardDetails.cardnumber) {
    //   this.cardnumberError.status = true;
    //   this.cardnumberError.message = "Enter card number";
    // }
    // if (!this.cardDetails.cvv) {
    //   this.cvvError.status = true;
    //   this.cvvError.message = "Enter cvv number";
    // }
    // if (!this.expdate) {
    //   this.expdateError.status = true;
    //   this.expdateError.message = "Select date";
    // }
    // setTimeout(() => {
    //   this.nameError.status = false;
    //   this.nameError.message = "";
    //   this.cardnumberError.status = false;
    //   this.cardnumberError.message = "";
    //   this.cvvError.status = false;
    //   this.cvvError.message = "";
    //   this.expdateError.status = false;
    //   this.expdateError.message = "";
    // }, 2000);
    
  }

}
