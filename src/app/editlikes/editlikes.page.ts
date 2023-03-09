import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editlikes',
  templateUrl: './editlikes.page.html',
  styleUrls: ['./editlikes.page.scss'],
})
export class EditlikesPage implements OnInit {
	array=[];
  likes='';

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

      console.log('service likes ===  entering likessss page',this.editchildService.likes)

     }

  ngOnInit() {
   

    // this.getlikes();
  }

  goback(){
  	
    this.location.back()
    
  }

  // getlikes(){
  //   console.log('medarray',this.childService.likes)
  //   this.editchildService.likes.forEach(val=>{
  //   let data={
  //      title:val.likes,
  //    }
  //    this.array.push(data)
  //   })
  // }

  add(){
    if(this.likes){
      // let data={
      //   like: this.likes,
      // }
      // this.array.push(data);
      this.editchildService.likes.push(this.likes);
      // this.editchildService.likes1.push(this.likes);
      console.log('likes services after add likes',this.editchildService.likes)
      this.likes='';
    }
    else if(!this.likes){
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
   
      
      let splice=this.editchildService.likes.splice(i,1)
     console.log('splice' ,splice);
   
     
  }

}
