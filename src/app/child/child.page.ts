import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  userid:any;
  childarray=[];
  defaultProfile:any;
   error = {
    status: false,
    message: "",
  };
  childdetil=false;
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    private rest: RestService) { }

  ngOnInit() {
    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);
    // this.getchilds();
  }

  ionViewDidEnter(){
    this.getchilds();
  }
  getchilds(){
    this.childarray=[];
    this.loading.loadershow();
    this.rest.sendRequest("display_children", {userId:this.userid}).subscribe(
      (data:any)=>{
       if(data.status=='success'){
         console.log('display_children data::',data);
         this.childdetil=true;
         data.data.forEach(val=>{
           if(val.profile_picture==null){
             this.defaultProfile='assets/imgs/profilelogo.png';
           }else{
             this.defaultProfile=val.profile_picture
           }
           let Obj={
             childid:val.child_id,
             parentid:val.parent_id,
             name:val.child_name,
             profile:this.defaultProfile,
             age:val.age,
             description:val.additional_notes,
           }
           this.childarray.push(Obj);
           this.loading.hideLoader();
           this.error.status = false;
         })
         console.log('child array:',this.childarray);
        }
        if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data);
          this.error.status = true;
          this.error.message = data.message
          // setTimeout(() => {
          //   this.error.status = false;
          //   this.error.message = "";
          // }, 3000);
        }
       
      }
    );
  }
  gotoprofile(item){
  	this.navCtrl.navigateForward(['/childprofile',{
      childid:item.childid,
      parentid:item.parentid
    }]);
  }
  next(){
  	this.navCtrl.navigateForward('/addchild');
  }
}
