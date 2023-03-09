import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { EditchildService } from "../services/editchild.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.page.html',
  styleUrls: ['./dislikes.page.scss'],
})
export class DislikesPage implements OnInit {
	// array=[
	// 	{ title: 'Cars'},
 //    	{ title: 'Playing with toys' },
	// ]
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
     private route: ActivatedRoute) { }

  ngOnInit() {
    

    // this.getdislikes();
  }

   goback(){
  	
   this.navCtrl.navigateBack('/addchild');
     
   
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
      //   title: this.dislikes,
      // }
      // this.array.push(data);
      this.childService.dislikes.push(this.dislikes);
      // this.editchildService.dislikes.push(this.dislikes);
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
   this.childService.dislikes.map((el,index) => {
      console.log('index',i)
      
      let splice=this.childService.dislikes.splice(i,1)
     console.log('splice' ,splice);
    })
     
  }
}
