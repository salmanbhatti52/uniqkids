import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editfavorite',
  templateUrl: './editfavorite.page.html',
  styleUrls: ['./editfavorite.page.scss'],
})
export class EditfavoritePage implements OnInit {
	array=[];
  favorite='';
  page:any;

   error = {
    status: false,
    message: "",
  };
  constructor(public navCtrl: NavController,
     public childService: ChildService,
     public editchildService: EditchildService,
     private route: ActivatedRoute,
     public location : Location) {

      console.log('service favourte ===  entering favourte page',this.editchildService.favorite)
      }

  ngOnInit() {
  }

  goback(){
  	 
    this.location.back()
     
  }

  add(){
    if(this.favorite){
      // let data={
      //   favourite_activity: this.favorite,
      // }
      // this.array.push(data);
      this.editchildService.favorite.push(this.favorite);
      // this.editchildService.favorite1.push(this.favorite);
      this.favorite='';
    }
    else if(!this.favorite){
      console.log('empty');
      this.error.status = true;
      this.error.message ="Field is required";
      setTimeout(() => {
        this.error.status = false;
        this.error.message = "";
      }, 2000);
    }
  }

  del(i){
    console.log('index',i)
  
      
      let splice=this.editchildService.favorite.splice(i,1)
     console.log('splice' ,splice);
   
     
  }

}
