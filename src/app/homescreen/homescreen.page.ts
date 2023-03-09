import { Component, OnInit } from '@angular/core';
import { NavController ,Platform} from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { LoadingService } from '../services/loading.service';
import { EditchildService } from '../services/editchild.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { NgStyle } from '@angular/common';


const circleR=80;
const circleDasharray=2 * Math.PI * circleR;

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {


  userType: any;
  accountid: any;
   parentid: any;
  user: any;
  name: any;
  updateTimeInteval: any;
  defaultProfile: any;
  childsarray=[];
  childsarray2=[];
   error = {
    status: false,
    message: '',
  };

  picture=false;

  currentdate: any;
  total: any;
  // timer:number;
  seconds: any;
  interval: any;
  startduraation=1;

  circleR=circleR;
  circleDasharray=circleDasharray;
  parentProfile: any='assets/imgs/profilelogo.png';
  time: BehaviorSubject<string>=new BehaviorSubject('00:00');
  percent: BehaviorSubject<number>=new BehaviorSubject(100);
  starttime: any;
  currenttime: any;
  endtime:any;

  progressbar=false;

  mobile: any;
  totaltime:any;
  timer:number=0;
  removebtn=false;
  activeid: any = 0;
  disabled: Array<boolean> = []
  sethireid: string;
  constructor(public navCtrl: NavController,
    public loading: LoadingService,
    private rest: RestService,
    public editchild: EditchildService,
    public platform: Platform,
    public statusbar: StatusBar) { }

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
    console.log('userType:',this.userType);

    this.accountid = localStorage.getItem('accountTypeId');
    console.log('accountid:',this.accountid);

    this.user=JSON.parse(localStorage.getItem('user'));

    console.log('user details',this.user);

    this.name=this.user.first_name;
    console.log('first_name',this.name);
    this.parentid=this.user.users_id;
    console.log('parent id:',this.parentid);

    if (this.platform.is('android')) {
      this.mobile='android';
    }
    if (this.platform.is('ios')) {
      this.mobile='ios';
    }

    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusbar.overlaysWebView(true);
      // set status bar to white
      // this.statusbar.backgroundColorByHexString('#FFFFFF');
      this.statusbar.styleDefault();
    });


  }

  goto(){

    this.navCtrl.navigateForward('/parentprofileview');

  }

  ionViewWillEnter(){
    this.getprofile();


    this.showchild();
    
  }

 

  getprofile(){
    this.rest.sendRequest('get_profile_picture', {userId:this.parentid}).subscribe(
      (data: any)=>{
        console.log('profile get data:',data);
        if(data.data.profile_picture==null || data.data.profile_picture==''){
        this.parentProfile=this.parentProfile;
        }else{
          this.parentProfile=data.data.profile_picture;
        }
      }
    );
  }
  showchild(){
    this.currentdate= moment(new Date()).format('YYYY-MM-DD');
    console.log('curent date',this.currentdate);
    const currentDate=  moment(new Date()).format('DD-MM-YY');
    this.childsarray=[];
    this.loading.loadershow();
    this.rest.sendRequest('home_screen_hirings', {parentId:this.parentid}).subscribe(
      (data: any)=>{

        console.log('home_screen_hirings',data);
         if(data.status=='success'){
          this.loading.hideLoader();


          // if(data.data[0]){
          //   if(data.data[0].child_details.profile_picture==null || data.data[0].child_details.profile_picture==''){
          //     this.defaultProfile='assets/imgs/profilelogo.png';
          //   }else{
          //     this.defaultProfile=data.data[0].child_details.profile_picture
          //   }
          //   let currentDateTime=data.data[0].current_time
          //   console.log('current time',data.data[0].current_time);
          //   let obj={
          //     caregiverid:data.data[0].caregiver_id,
          //     hiringid:data.data[0].hiring_id,
          //     fname:data.data[0].caregiver_details.first_name,
          //     lname:data.data[0].caregiver_details.last_name,
          //     profile:this.defaultProfile,
          //     age:data.data[0].child_details.age,
          //     childid:data.data[0].child_details.child_id,
          //     parentid:data.data[0].child_details.parent_id,
          //     childname:data.data[0].child_details.child_name,
          //     starttime:data.data[0].start_time,
          //     endtime:data.data[0].end_time,
          //     status:data.data[0].status,
          //     date:data.data[0].date
          //   }
          //   if(data.data[0].status=='Active'){
          //     // console.log('statttt time===>>>',data.data[i].start_time);
          //     if(currentDate==data.data[0].date){
          //       this.childsarray.push(obj);
          //     }
          //     //  this.childsarray.push(obj)
          //     // console.log('endddd  time===>>>',data.data[0].end_time);
          //     // if(data.data[0].end_time>currentDateTime){
          //     //   this.dutyTimer(currentDateTime,data.data[0].end_time,data.data[0].date)
          //     //   // console.log('time===>>>',data.data[i].end_time);
          //     // }


          //     //  this.childsarray.push(obj)
          //    // this.getdifference(data.data[i].end_time,data.data[i].start_time);
          //     this.picture=true;
          //   }
          // }

          // if(data.data[1]){
          //   if(data.data[1].child_details.profile_picture==null || data.data[1].child_details.profile_picture==''){
          //     this.defaultProfile='assets/imgs/profilelogo.png';
          //   }else{
          //     this.defaultProfile=data.data[1].child_details.profile_picture
          //   }
          //   let currentDateTime=data.data[0].current_time
          //   console.log('current time',data.data[1].current_time);
          //   let obj={
          //     caregiverid:data.data[1].caregiver_id,
          //     hiringid:data.data[0].hiring_id,
          //     fname:data.data[1].caregiver_details.first_name,
          //     lname:data.data[1].caregiver_details.last_name,
          //     profile:this.defaultProfile,
          //     age:data.data[1].child_details.age,
          //     childid:data.data[1].child_details.child_id,
          //     parentid:data.data[1].child_details.parent_id,
          //     childname:data.data[1].child_details.child_name,
          //     starttime:data.data[1].start_time,
          //     endtime:data.data[1].end_time,
          //     status:data.data[1].status,
          //     date:data.data[1].date
          //   }
          //   if(data.data[1].status=='Active'){
          //     // console.log('statttt time===>>>',data.data[i].start_time);
          //     if(currentDate==data.data[1].date){
          //       this.childsarray2.push(obj);
          //     }
          //     //  this.childsarray.push(obj)
          //     // console.log('endddd  time===>>>',data.data[0].end_time);
          //     // if(data.data[0].end_time>currentDateTime){
          //     //   this.dutyTimer(currentDateTime,data.data[0].end_time,data.data[0].date)
          //     //   // console.log('time===>>>',data.data[i].end_time);
          //     // }


          //     //  this.childsarray.push(obj)
          //    // this.getdifference(data.data[i].end_time,data.data[i].start_time);
          //     this.picture=true;
          //   }
          // }





           for(let i=0 ; i<data.data.length ; i++){
            //  console.log('data',data.data)
             if(data.data[i].child_details.profile_picture==null || data.data[i].child_details.profile_picture==''){
                 this.defaultProfile='assets/imgs/profilelogo.png';
              }else{
                this.defaultProfile=data.data[i].child_details.profile_picture;
              }
              const currentDate=  moment(new Date()).format('DD-MM-YY');
              console.log('current date',currentDate);
              const obj={
                caregiverid:data.data[i].caregiver_id,
                hiringid:data.data[i].hiring_id,
                fname:data.data[i].caregiver_details.first_name,
                lname:data.data[i].caregiver_details.last_name,
                profile:this.defaultProfile,
                age:data.data[i].child_details.age,
                childid:data.data[i].child_details.child_id,
                parentid:data.data[i].child_details.parent_id,
                childname:data.data[i].child_details.child_name,
                starttime:data.data[i].start_time,
                endtime:data.data[i].end_time,
                status:data.data[i].status,
                date:data.data[i].date
              };

              if(data.data[i].status=='Active'){
                console.log('statttt time===>>>',data.data[i].date);
                if(currentDate==data.data[i].date){
                  this.childsarray.push(obj);
                  this.disabled.push(false);
                }

                // console.log('endddd  time===>>>',data.data[i].end_time);
                // if(data.data[i].end_time>currentDateTime){
                //   this.dutyTimer(currentDateTime,data.data[i].end_time,data.data[i].date)

                // }


                //  this.childsarray.push(obj)
               // this.getdifference(data.data[i].end_time,data.data[i].start_time);
                this.picture=true;
              }
           }


          //  data.data.forEach(val=>{
          //    if(val.child_details.profile_picture==null || val.child_details.profile_picture==''){
          //      this.defaultProfile='assets/imgs/userprofile.png';
          //    }else{
          //      this.defaultProfile=val.child_details.profile_picture
          //    }


          //    let obj={
          //      caregiverid:val.caregiver_id,
          //      fname:val.caregiver_details.first_name,
          //      lname:val.caregiver_details.last_name,
          //      profile:this.defaultProfile,
          //      age:val.child_details.age,
          //      childid:val.child_details.child_id,
          //      parentid:val.child_details.parent_id,
          //      childname:val.child_details.child_name,
          //      starttime:val.start_time,
          //      endtime:val.end_time,
          //      date:val.date,
          //      status:val.status,
          //    }
          //    if(val.status=='Active'){

          //     /*  let currentDateTime = new Date(); */
          //      this.childsarray.push(obj);
          //      this.picture=true;
          //      if(val.end_time>currentDateTime){
          //        //  this.updateTimeInteval =setInterval(()=>{
          //         this.dutyTimer(currentDateTime,val.end_time,val.date)
          //         // },1000)
          //     }


          //   /*   if(StartdateTime.getTime() < currentDateTime.getTime()){
          //       console.log("date.....",new Date(StartdateTime).getTime());
          //       this.getdifference(obj.endtime,obj.starttime);
          //     }
          //     else{
          //       console.log("duty not started");
          //     } */

          //    }

          //  })
           console.log('requestsarray:',this.childsarray);
         }
         if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = '';
          }, 3000);
          return;
        }
      }
    );
  }
  // dutyTimer(starttime,endtime,date){
  //   const StartdateTimeMake = date + ' ' + starttime;
  //   const EnddateTimeMake = date + ' ' + endtime;
  //   const StartdateTime = new Date(StartdateTimeMake);
  //   const EnddateTime = new Date(StartdateTime);
  //   const currentDateTime = new Date();
  //   // if(StartdateTime.getTime() < currentDateTime.getTime() ){
  //   //   console.log("date.....",new Date(StartdateTime).getTime());
  //   // }
  //   // else{
  //   //   console.log("duty not started");
  //   // }
  // }

  viewtimer(child,i){
    // console.log('index for array',i)
    // console.log('child.hiringid',child.hiringid);
    this.activeid=child.hiringid
    console.log('a this.activeid ===', this.activeid);
    
    // console.log('this.disabled === after',this.disabled);
   
    const currentDateTime =  moment(new Date()).format('h:mm a');
    console.log('current time',currentDateTime);
    // console.log('starttime',child.starttime);
    // console.log('edit time with new date',moment().format('HH:MM'));
    // console.log('child hiring date::',child.date);
    
    var convertedTime = moment(currentDateTime, 'hh:mm a').format('HH:mm')
    console.log('conveted time',convertedTime);
    var starttime=moment(child.starttime, 'hh:mm a').format('HH:mm');
    console.log('started conveted time',starttime);
    if(convertedTime>starttime){
          
      this.rest.sendRequest('view_timer_details', {hiringId:child.hiringid}).subscribe(
        (data: any)=>{
          console.log('date time:',data);
          // console.log('start time:::',data.data.start_time)
          // console.log('current time time:::',data.data.current_time)
          this.progressbar=true;
          // this.starttime=data.data.start_time;
          this.currenttime= moment(data.data.current_time, 'hh:mm a').format('HH:mm')
          // console.log('current conveted time into 24 hour',this.currenttime);
          var endtime24format=moment(data.data.end_time, 'hh:mm a').format('HH:mm');
          // console.log('end conveted time into 24 hour',endtime24format);

          // this.currenttime=data.data.current_time;
          if(endtime24format>this.currenttime){
            this.disabled.map((data,index)=>{
     
              if(i==index){
               this.disabled[index] = true;  
               console.log('index====',index)    
              }
              else{
               this.disabled[index] = false;   
              }
            
           })
            
          this.getdifference(data.data.end_time,data.data.current_time);  
          
          }
        }
      );
    }else{
      this.loading.presentToast('This job is not started Yet!');
    }

  }
 


  getdifference(end,start){
    console.log(end,start);
    // this.editchild.childstime.push(start)
    // this.editchild.childetime.push(end)
    this.starttime=start;
    this.endtime=end;
  
    console.log(this.endtime,'endtime'+'start',this.starttime)
    const diff = moment(this.endtime, 'HH:mm a').diff(moment(this.starttime, 'HH:mm a'));
    const d = moment.duration(diff);
    const hours =  Math.floor(d.asHours());
    const minutes = Math.floor(d.asMinutes());
    this.seconds =  Math.floor(d.asSeconds());

    this.total =hours +' hours ' + minutes + ' minutes';
    // console.log('this.total',this.total);
    console.log('asSeconds',this.seconds);


      this.starttimer(this.seconds);



  }

  starttimer(duration: number){
    // console.log('seconds in func::::',duration)
    this.timer=duration;
    // console.log('timer',this.timer);
    clearInterval(this.interval);
    this.updatetimevalue();
    this.interval=setInterval(()=>{
      this.updatetimevalue();
    },1000);

    


  }



  percentageOffset(percent){
    const percentagefloat=percent / 100;
    return circleDasharray * (1 - percentagefloat);
  }

  updatetimevalue(){
    let hours: any=this.timer / 3600;
    let minutes: any=this.timer  % 3600 / 60;
    // let minutes:any=this.timer / 60;
    let seconds: any=this.timer % 60;

    hours=String('0'+ Math.floor(hours)).slice(-2);
    minutes=String('0'+ Math.floor(minutes)).slice(-2);
    seconds=String('0'+ Math.floor(seconds)).slice(-2);

    const text=hours +':'+ minutes+':'+seconds;

    this.time.next(text);
    // console.log('time',text);

    this.totaltime=this.seconds;
    const percentage=(( this.totaltime - this.timer) /  this.totaltime) * 100;
    this.percent.next(percentage);

    // console.log('percentage',percentage)

    --this.timer;

   
    if(this.timer<-1){
      this.starttimer(this.seconds);

    }
    if(this.timer<0){
      clearInterval(this.interval);
      this.timer=0;
    }
  }

  // ionViewWillLeave(){
  //   clearInterval(this.interval)
  //   clearInterval(this.updateTimeInteval)
  // }


  gotoprofile(id){
    if(this.accountid==1){
      this.navCtrl.navigateForward(['/profile',{
        page:'homescreen',
        userid:id.caregiverid,
      }]);
    }
    // else if(this.userType=='caregiver'){
    //   this.navCtrl.navigateForward('/childprofile1');
    // }

  }

}
