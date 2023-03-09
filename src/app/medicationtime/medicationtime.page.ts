import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-medicationtime',
  templateUrl: './medicationtime.page.html',
  styleUrls: ['./medicationtime.page.scss'],
})
export class MedicationtimePage implements OnInit {
  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  loaded = false;
  option = {
    loop: true,
    direction: 'vertical',
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true
  };
 
  hours: Array<any> = [];
  mints: Array<any> = [];

  sHours: string;
  sMints: string;
  sV: string;
 
  loading: HTMLIonLoadingElement;
 

  array=[];
  medicationname='';
  Time='';

  detail:any;
  medarr:any;

  page:any;

   error = {
    status: false,
    message: "",
  };

  constructor(public navCtrl: NavController,
    public childService: ChildService,
    public editchildService: EditchildService,
     private route: ActivatedRoute) { 
  	
  }

  ngOnInit() {

    this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
    this.mints = Array.from({ length: 60 }, (v, k) => k + 0);

    this.getmedication();

    console.log('service medication',this.childService.medication);
   
   
  }

 goback(){
   
    this.navCtrl.navigateBack('/addchild');
  
	 
  }

 
 
  getStartHoures(){
   
    if (this.loaded) {
     

      this.sHours = document.querySelector(".s_hours .swiper-slide-active p")?.textContent;
      this.sMints = document.querySelector(".s_mints .swiper-slide-active p")?.textContent;
      this.sV = document.querySelector(".s_v .swiper-slide-active p")?.textContent;

   
      var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;

      console.log('time',calStartTime);  
        
    }
  }
  checkStart:any;
  checkEnd:any;
  printTimeError:any;
  printTimeErrorBoolen :boolean = false ;
   TimeComparisionFun(dayFilter){

    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    
 
    this.Time =  this.sHours + ':' + this.sMints + ' ' + this.sV;
    
    console.log(this.Time, "----------" ,'endTime');
   

  

  }

  getmedication(){
    console.log('medarray',this.medarr)
    this.childService.medication.forEach(val=>{
    let data={
       medicationName:val.medicationName,
       medicationTime:val.medicationTime
     }
     this.array.push(data)
    })
  }
  add(){
    this.TimeComparisionFun("dayFilter")
    if(this.medicationname && this.Time){
      let data={
        medicationTime: this.Time,
        medicationName:this.medicationname
      }
      this.array.push(data);
      this.childService.medication.push(data);
      // this.editchildService.medication.push(data);
      this.medicationname='';
    }
    else if(!this.medicationname){
      console.log('empty');
      this.error.status = true;
      this.error.message ="Field is required";
      setTimeout(() => {
        this.error.status = false;
        this.error.message = "";
      }, 2000);
    }
    if(!this.Time){
      console.log('empty time');
    }
    
  }

  del(i){
    console.log('index',i)
    let arr=[{ time: '8:30 AM',name:'Medication Name'},
   { time: '8:30 AM',name:'Medication Name'},]
   this.childService.medication.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.medication.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }

}
