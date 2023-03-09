import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editmedication',
  templateUrl: './editmedication.page.html',
  styleUrls: ['./editmedication.page.scss'],
})
export class EditmedicationPage implements OnInit {
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

  medication:any;
  medicationarray:any;
  page:any;

   error = {
    status: false,
    message: "",
  };

  constructor(public navCtrl: NavController,
    public editchildService: EditchildService,
     private route: ActivatedRoute,public location : Location) { 

      console.log('service medication ===  entering maditatuion page',this.editchildService.medication);
    }

  ngOnInit() {

  	this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
    this.mints = Array.from({ length: 60 }, (v, k) => k + 0);

   
    // this.medication=this.route.snapshot.params['medication']
    // this.medicationarray=(this.editchildService.medication)
    // console.log('medication get:',this.medicationarray)
    
     // this.getmedication();
  }

  goback(){
   
    this.location.back()
  
	 
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
    console.log('medarray',this.editchildService.medication)
   
    // this.medicationarray.forEach(val=>{
    // let data={
    //    medicationName:val.medicationname,
    //    medicationTime:val.medicationtime
    //  }
    //  this.array.push(data)
    // })
    // this.editchildService.medication.forEach(val=>{
    // let data={
    //    medicationName:val.medicationName,
    //    medicationTime:val.medicationTime
    //  }
    //   this.array.push(data)
    // })
  }
  add(){
    this.TimeComparisionFun("dayFilter")
    if(this.medicationname && this.Time){
      let data={
        medication_name:this.medicationname,
        medication_time: this.Time,
      }
       // this.array.push(data)
      this.editchildService.medication.push(data);
      // this.editchildService.medication.push(data);
      console.log('array after appending', this.editchildService.medication)
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
    console.log('index====deleting',i)
    let splice1 =this.editchildService.medication.splice(i,1)
     
  }
}
