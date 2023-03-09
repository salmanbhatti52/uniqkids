import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,NavParams} from '@ionic/angular';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import * as moment from 'moment';

@Component({
  selector: 'app-requestpopup',
  templateUrl: './requestpopup.page.html',
  styleUrls: ['./requestpopup.page.scss'],
})
export class RequestpopupPage implements OnInit {
  userid:any;
  image:any;
  myDate: String = moment(new Date().toISOString()).format('YYYY-MM-DD')
  time:any;
  date=''
  stime=''
  etime=''
  selectdate:any;
  strtTime:any;
  endTime:any;
  childarray=[];
  error = {
    status: false,
    message: "",
  };
  selectError={
    status: false,
    message: "",
  }
   dateError={
    status: false,
    message: "",
  }
   strtTimeError={
    status: false,
    message: "",
  }
   endTimeError={
    status: false,
    message: "",
  }

  checked:any;
  selectedchild=[];

  caregiverid:any;
  child: string;
  caregivername:any;
  strttime: any;
  EndTime: string;
  constructor(public modal: ModalController,
  	public navCtrl: NavController,
    private navParams:NavParams,
    public loading:LoadingService,
    private rest: RestService) { 

    this.userid=localStorage.getItem('uid')
    console.log('userid',this.userid)

    this.caregiverid=this.navParams.get('caregiverid')
    console.log('caregiverid',this.caregiverid)

    this.caregivername=this.navParams.get('name')
    console.log('caregivername',this.caregivername)
  }

  ngOnInit() {
     this.getchilds();
  }

  close(){
    console.log('close');
    this.modal.dismiss();
  }
  selectdata(){
    this.selectdate= moment(this.date).format('YYYY-MM-DD')

    console.log('date',this.selectdate)
  }
  starttime(){
    this.strtTime = moment(new Date(this.stime)).format('hh:mm A');
    console.log('stime',this.strtTime)
    this.strttime= moment(new Date(this.stime)).format('HH:mm');
    console.log('stime for HH:MM',this.strttime)
    // this.strtTime= moment(this.stime).format('LT')
    //  console.log('date',this.strtTime)
  }
  endtime(){
    this.endTime= moment(new Date(this.etime)).format('hh:mm A');
    console.log('eetime',this.endTime)
    this.EndTime= moment(new Date(this.etime)).format('HH:mm');
    console.log('eetime for HH:MM>>>',this.EndTime)
    //  this.endTime= moment(this.etime).format('LT')
    //   console.log('date',this.endTime)
  }
  gettime(){
    
   
  }
  getchilds(){
    this.loading.loadershow();
    this.rest.sendRequest("get_parent_children", {parentId:this.userid}).subscribe(
      (data:any)=>{
       console.log('get_profile_details data::',data);
       if(data.status=='success'){
        this.child='yes'
         console.log('suucesssss');
         this.loading.hideLoader();
         data.data.forEach(val=>{
          //  if(val.profile_picture==null || val.profile_picture==''){
          //    this.image="assets/imgs/profilelogo.jpg"
          //  }else{
          //    this.image=val.profile_picture
          //  }
           let data={
             childid:val.child_id,
             profile:val.profile_picture,
             name:val.child_name,
             age:val.age,
             about:val.additional_notes
           }
           this.childarray.push(data)
         })
         console.log('childarray',this.childarray);
        }
        if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
            this.child='none'
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 3000);
          return;
        }
       
      },(err)=>{
        
      }
    );

  }

  selectchild(data,checkbox,index){
    console.log('index number',index);
    console.log('checked',checkbox.detail.checked)
    console.log('child details',data)

    if(checkbox.detail.checked==false){
      this.childarray.map((el,i) => {
        console.log('index',i)
        console.log('el',el)
        if(el.childid === data.childid){
          console.log('deleted id');
          this.selectedchild.splice(i,1)
        }
      })
      console.log("deleted",this.selectedchild)
      // this.checked=checkbox.detail.checked
    }
    if (checkbox.detail.checked) {
      console.log('checkbox',checkbox.detail.checked);
      this.checked=checkbox.detail.checked;
      console.log('data click on checkbox',data);

      // let obj={
      //   childid:data.childid,
      // }
      this.selectedchild.push(data.childid);
     
      console.log('selectedchild',this.selectedchild);
    }
  }
  closeModal() {
    let diff =moment(this.endTime, 'HH:mm a').diff(moment(this.strtTime, 'HH:mm a'))
    let d = moment.duration(diff);
    console.log('time difference',d)
    let seconds =  Math.floor(d.asSeconds());
    console.log('seconnds',seconds)
    if(this.selectedchild.length>0 &&this.selectdate && this.strtTime&& this.endTime){
      if ( this.strttime.toString() > this.EndTime.toString()) {
        console.log('this.strttime.toString()',this.strttime.toString())
        this.loading.presentToast('End time should be greater than Start time')
      }
      else if(seconds<=3600){
        this.loading.presentToast('Hire caregiver for minimum 1 hour')
      }
      else{
        this.loading.loadershow();
        let sendata={
          parentId:this.userid,
          childId:this.selectedchild,
          caregiverId:this.caregiverid,
          date:this.selectdate,
          startTime:this.strtTime,
          endTime:this.endTime
  
        }
        this.rest.sendRequest("hire_caregiver", sendata).subscribe(
        (data:any)=>{
          console.log('hire_caregiver::',data)
          if(data.status=='success'){
            this.loading.hideLoader();
            this.modal.dismiss().then(res=>{
              this.loading.presentToast('Your Request has been sent to Caregiver' + this.caregivername)
              this.navCtrl.navigateForward('/homescreen');
              console.log('selcted child after dismiss',this.selectedchild)
            })
          }
          if(data.status=='error'){
            this.loading.hideLoader();
            console.log('hired already...........')
            this.loading.presentToast(data.message)
          }
          
        });
          
        
      }    
    }
    if (this.selectedchild.length === 0) {
      this.selectError.status = true;
      this.selectError.message = 'Please select Child!';
    }
    if (!this.selectdate) {
      this.dateError.status = true;
      this.dateError.message = "Select date";
    }
    if (!this.strtTime) {
      this.strtTimeError.status = true;
      this.strtTimeError.message = "Select start time";
    }
    if (!this.endTime) {
      this.endTimeError.status = true;
      this.endTimeError.message = "Select end time";
    }
    setTimeout(() => {
      this.selectError.status = false;
      this.selectError.message = "";
      this.dateError.status = false;
      this.dateError.message = "";
      this.strtTimeError.status = false;
      this.strtTimeError.message = "";
      this.endTimeError.status = false;
      this.endTimeError.message = "";
    }, 2000);
	   
	}

}
