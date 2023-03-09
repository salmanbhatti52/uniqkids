import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from "../services/rest.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
	loggedid:any;
	 error = {
    status: false,
    message: "",
  };
  allChats=[];
  image:any;
  chatdetail=false
  constructor(public navCtrl: NavController,
  	private rest: RestService) { }

  ngOnInit() {
  	this.loggedid=localStorage.getItem('uid')
  	console.log('loagged details',this.loggedid);

  	this.getchatlist();
  }

  

  getchatlist(){
  	 this.rest
      .sendRequest(
        "chat",
        {
          requestType: "getChatList",
          userId : this.loggedid,
        },
      )
      .subscribe(async (res: any) => {
        console.log("getChatList response", res);
        if (res.status == "success") {
          this.chatdetail=true;
  					res.data.chat_list_details.forEach(val=>{
  						if(val.profile_pic=='' || val.profile_pic==null){
  							this.image='assets/imgs/userprofile.png'
  						}else{
  							this.image=val.profile_pic
  						}
  						let obj={
  							id:val.user_id,
  							name:val.name,
  							profilepic:this.image,
  							message:val.message,
  							time:val.msg_time
  						}
  						this.allChats.push(obj)
  					})
        	// this.allChats = res.data.chat_list_details;
          
          console.log("receving All chats", this.allChats);
         
        }
         if (res.status == "error"){
           this.error.status = true;
          this.error.message = res.message;
          return;
         } 
      });
  }


  open(chat){
  	this.navCtrl.navigateForward(['/inbox',{
  		id:chat.id,
  		name:chat.name
  	}]);
  }

}
