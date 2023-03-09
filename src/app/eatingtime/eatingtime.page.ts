import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';
import { EditchildService } from "../services/editchild.service";
import { ChildService } from "../services/child.service";
import { ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-eatingtime',
  templateUrl: './eatingtime.page.html',
  styleUrls: ['./eatingtime.page.scss'],
})
export class EatingtimePage implements OnInit {
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
  foodname='';
  Time='';

  page:any;
  error = {
    status: false,
    message: "",
  };
  constructor(public navCtrl: NavController,
    public childService: ChildService,
    public editchildService: EditchildService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
    this.mints = Array.from({ length: 60 }, (v, k) => k + 0);

    console.log('service medication',this.childService.medication);
    
    this.getfood();
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

  getfood(){
    console.log('food array',this.editchildService.food)
    this.editchildService.food.forEach(val=>{
    let data={
       medicationName:val.foodName,
       medicationTime:val.eatingTime
     }
     this.array.push(data)
    })
  }
  add(){
    this.TimeComparisionFun("dayFilter")
    if(this.foodname && this.Time){
      let data={
        eatingTime: this.Time,
        foodName:this.foodname
      }
      this.array.push(data);
      this.childService.food.push(data);
      // this.editchildService.food.push(data);
      this.foodname='';
    }
    else if(!this.foodname){
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
   this.childService.food.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.food.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }
}
