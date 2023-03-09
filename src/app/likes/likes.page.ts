import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
	// array=[
	// 	{ title: 'Cars'},
 //    { title: 'Playing with toys' },
	// ]
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
     private route: ActivatedRoute) { }

  ngOnInit() {
   

    this.getlikes();
  }

  goback(){
  	
   this.navCtrl.navigateBack('/addchild');
    
  }

  getlikes(){
    console.log('medarray',this.childService.likes)
    this.childService.likes.forEach(val=>{
    let data={
       title:val.likes,
     }
     this.array.push(data)
    })
  }

  add(){
    if(this.likes){
      let data={
        title: this.likes,
      }
      this.array.push(data);
      this.childService.likes.push(this.likes);
      // this.editchildService.likes.push(this.likes);
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
   this.childService.likes.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.likes.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }
}
