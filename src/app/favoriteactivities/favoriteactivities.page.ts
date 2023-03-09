import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-favoriteactivities',
  templateUrl: './favoriteactivities.page.html',
  styleUrls: ['./favoriteactivities.page.scss'],
})
export class FavoriteactivitiesPage implements OnInit {
	// array=[
	// 	{ title: 'Cars'},
 //    { title: 'Playing with toys' },
	// ]
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
     private route: ActivatedRoute
     ) { 

  }

  ngOnInit() {
  
  }

  goback(){
  	 
   this.navCtrl.navigateBack('/addchild');
     
  }

  add(){
    if(this.favorite){
      let data={
        title: this.favorite,
      }
      this.array.push(data);
      this.childService.favorite.push(this.favorite);
      // this.editchildService.favorite.push(this.favorite);
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
   this.childService.favorite.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.favorite.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }

}
