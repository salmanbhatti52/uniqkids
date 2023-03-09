import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditchildService {
  medication=[];
  food=[];
  snack=[];
  likes=[];
  dislikes=[];
  favorite=[];
  
  likes1=[]
  dislikes1=[];
  favorite1=[];
  
  editpage:any;

  medications:any;

  medication1:any;

  childstime=[];
  childetime=[];
  timearray=[];

  starttime:any;
  endtime:any;

  time:BehaviorSubject<string>=new BehaviorSubject('00:00');
  percent:BehaviorSubject<number>=new BehaviorSubject(100);
  totaltime:any;
  timer:number=0;
  constructor() {

    // console.log(this.childstime,'time array in service')
    // console.log(this.childetime,'time array in service')

    // this.starttime=this.childstime
    // console.log('starttime',this.starttime)
    // this.endtime=this.childetime
    // console.log('endtime',this.endtime)
   }


  // gettime(){
  //   let obj={
  //     childstime:this.childstime,
  //     childetime:this.childetime
  //   }
  //   this.timearray.push(obj)
  // }
}
