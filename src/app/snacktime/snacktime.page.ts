import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController ,IonSlides} from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-snacktime',
  templateUrl: './snacktime.page.html',
  styleUrls: ['./snacktime.page.scss'],
})
export class SnacktimePage implements OnInit {
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
  snackname='';
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
     
      // this.page=this.editchildService.editpage
     

      this.snacktime();
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
    
    console.log(this.Time , "----------" ,'endTime');
   

  

  }

  goback(){
  	
    this.navCtrl.navigateBack('/addchild');
    
    
  }

  snacktime(){
    console.log('snackarray',this.childService.snack)
    this.childService.snack.forEach(val=>{
    let data={
       snackName:val.snackName,
       snackTime:val.snackTime
     }
     this.array.push(data);

    })
  }
  add(){
    this.TimeComparisionFun("dayFilter");
    if(this.snackname && this.Time){
      let data={
        snackTime: this.Time,
        snackName:this.snackname
      }
      this.array.push(data);
      this.childService.snack.push(data);
      // this.editchildService.snack.push(data);
      this.snackname='';
    }
    else if(!this.snackname){
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
   this.childService.snack.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.snack.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }
}
