import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams} from '@ionic/angular';
@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.page.html',
  styleUrls: ['./termsandcondition.page.scss'],
})
export class TermsandconditionPage implements OnInit {
  page:any;
  constructor(public modal: ModalController,
    public navParams:NavParams) { }

  ngOnInit() {

    this.page=this.navParams.get('termsaandcondition')
    console.log('page',this.page)
  }

  closemodal(){
    this.modal.dismiss();
  }

}
