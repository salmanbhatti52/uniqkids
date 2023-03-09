import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editdislikes',
  templateUrl: './editdislikes.page.html',
  styleUrls: ['./editdislikes.page.scss'],
})
export class EditdislikesPage implements OnInit {
	array=[];
  dislikes='';

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

      console.log('service dislikes ===  entering dislikessss page',this.editchildService.dislikes)
     }

  ngOnInit() {
    

    // this.getdislikes();
  }

   goback(){
  	
    this.location.back()
     
   
  }

  //  getdislikes(){
  //   this.childService.dislikes.forEach(val=>{
  //   let data={
  //      title:val.likes,
  //    }
  //    this.array.push(data)
  //   })
  // }
  add(){
    if(this.dislikes){
      // let data={
      //   dislike: this.dislikes,
      // }
      // this.array.push(data);
      this.editchildService.dislikes.push(this.dislikes);
      // this.editchildService.dislikes1.push(this.dislikes);
      this.dislikes='';
    }
    else if(!this.dislikes){
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
  
      let splice=this.editchildService.dislikes.splice(i,1)
     console.log('splice' ,splice);
   
     
  }

}
