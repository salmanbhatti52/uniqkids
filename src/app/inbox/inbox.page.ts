import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController,IonContent,AlertController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import * as moment from 'moment';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
	@ViewChild(IonContent) content: IonContent;
  // @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  // @ViewChild('allnewmessages') allnewmessages:ElementRef;

  messages = [];
	message: any;
	data = { type:'', name:'', message:'' };

	logeduser:any;
	loggedprofile:any;
	loggedid:any;
  caregiverid:any;
  profile:any;
  recieverid:any;
  currentTime:any;
  error = {
    status: false,
    message: "",
  };
  image:any;
  name:any;
  chatImagesArray=[];
  private autoSaveInterval: any;
  constructor(public navCtrl: NavController,
  	private activatedRoute:ActivatedRoute,
    public alertController:AlertController,
    private rest: RestService,
    private transfer: FileTransfer,
    private camera: Camera,
    public loading:LoadingService) { }

  ngOnInit() {

  	this.logeduser=JSON.parse(localStorage.getItem('user'))
  	console.log('loagged details',this.logeduser);
  	this.loggedid=this.logeduser.users_id
  	console.log('loagged details',this.loggedid);

  	this.recieverid = this.activatedRoute.snapshot.params["id"];
  	console.log('recieverid',this.recieverid);

    this.name = this.activatedRoute.snapshot.params["name"];
    console.log('name:',this.name);
  }

  goback(){
  	this.navCtrl.navigateBack('/chat');
    clearInterval(this.autoSaveInterval);
  }
  ionViewWillEnter(){
    this.scrollDown();

    // Get all  messages....
    this.getMessages();
    this.autoSaveInterval = setInterval(() => {
      this.updateMessages();
    }, 2000);
  }
  ionViewWillLeave() {
    clearInterval(this.autoSaveInterval);
    console.log("clear");
  }

  userTyping(event: any) {
    this.scrollDown();
  }
  updateMessages() {
    // geting all chats Messages
    this.rest
      .sendRequest(
        "chat",
        {
          requestType: "updateMessages",
          userId : this.loggedid,
          otherUserId: this.recieverid,
        },
      )
      .subscribe(async (res: any) => {
        console.log('update response',res);
        if (res.status == "success") {
          let unread_messages = res.data.unread_messages;
          let chatLength = res.data.chat_length;
          console.log("receving All chats unread messages", unread_messages);
          if (unread_messages.length > 0) {
            if (chatLength != unread_messages.length) {
              for (var i = 0; i < unread_messages.length; i++) {
                this.messages.push({
                  userId: unread_messages[i].userId,
                  time: unread_messages[i].time,
                  message: unread_messages[i].message,
                  messageType: unread_messages[i].msgType,
                  profilepic:unread_messages[i].profile_pic
                });
              }
              this.scrollDown();
            }
          }
          
        } 
      });
  }
  
  getMessages() {
    console.log("logged in user", this.loggedid);
    console.log("recieverid in user", this.recieverid);
    // geting all chats Messages
    this.rest
      .sendRequest(
        "chat",
        {
          requestType: "getMessages",
          userId : this.loggedid,
          otherUserId: this.recieverid,
        },
      )
      .subscribe(async (res: any) => {
        this.scrollDown();
        console.log("get messages response", res);
        if (res.status == "success") {
          this.error.status = false;
          res.data.chat_messages.forEach(val=>{
            if(val.profile_pic=='' || val.profile_pic==null){
              this.image='assets/imgs/userprofile.png'
            }else{
              this.image=val.profile_pic
            }

            let obj={
              userId:val.userId,
              name:val.name,
              profilepic:this.image,
              message:val.message,
              time:val.time,
              messageType:val.msgType,
              date:val.date
            }
            this.messages.push(obj)
          })
          // this.messages = res.data.chat_messages;
          console.log("receving All chats messages", this.messages);
          this.messages.map((messages, index) => {
            if (messages.messageType == "attachment") {
              this.chatImagesArray.push({
                image: messages.message,
              });
            }
          });
          console.log("allMsg array ", this.chatImagesArray);

         
        }
         if (res.status == "error"){
           this.error.status = true;
          this.error.message = res.message;
          return;
         } 
      });
  }

  sendMsg() {
  	console.log('inmessages')
    var time = new Date();

    this.currentTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    console.log('currentTime',this.currentTime)
    if( this.data.message!='' ){
      var d = moment().format('LLLL');
      let splitdate = d.split(',');
      let date = splitdate[1];

      let time = moment().format('LT'); 
      console.log('date',splitdate);
      let dateformatted = time;
      console.log('formatted date',dateformatted)
      console.log('user ids are = ',this.loggedid, this.recieverid);
      let messsage = {
        userId: this.loggedid,
        message: this.data.message,
        time: this.currentTime,
        messageType: "text"
      }
      
      this.messages.push(messsage);
      console.log('push messages',this.messages)
      let msgToSend = this.data.message;
      this.data.message = '';
      this.scrollDown();
      this.sendMessage(this.recieverid, msgToSend, "text");
      
    }
  }

  sendMessage(senderUserID, msg, type){
    let fiedlstosend = {
      requestType : "sendMessage",
      userId: this.loggedid,
      otherUserId:senderUserID,
      content: msg,
      sendingTime: this.currentTime,
      messageType: type
    }
    this.rest.sendRequest('chat',fiedlstosend).subscribe((res: any) => {
      console.log("send msg response",res);
    });
  }


  async selectImages(imageType) {
    const alert = await this.alertController.create({
      cssClass: "alertclassimg",
      header: "Select Attachment",
      buttons: [
        {
          text: "Choose from Gallery",
          handler: (res) => this.takePhotoFromGallery(imageType),
        },
        {
          text: "Camera",
          handler: (res) => this.takePhotoFromCamera(imageType),
        },

        {
          text: "Cancel",
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  async takePhotoFromGallery(imageType) {
    const options: CameraOptions = {
      quality: 100,
      // allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: 0,
    };
    await this.camera.getPicture(options).then((imageData: any) => {
      var time = new Date();

      this.currentTime = time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });

      let imagedata = `data:image/png;base64,${imageData}`;
      console.log("select from gallary", imagedata);
      this.messages.push({
       requestType : "sendMessage",
        userId: this.loggedid,
        otherUserId:this.recieverid,
        message: imagedata,
        sendingTime: this.currentTime,
        messageType: "attachment"
      });
      console.log("image added from gallary", this.messages);
      this.loading.presentLoader("Uploading image");
      this.uploadChatImage(imagedata);
    });
  }
  async takePhotoFromCamera(imageType) {
    const options: CameraOptions = {
      quality: 100,
      // allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    await this.camera.getPicture(options).then(
      (imageData: any) => {
        var time = new Date();

        this.currentTime = time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        });

        let imagedata = `data:image/png;base64,${imageData}`;
        console.log("select from Camera", imagedata);
        this.messages.push({
          requestType : "sendMessage",
          userId: this.loggedid,
          otherUserId:this.recieverid,
          message: imagedata,
          sendingTime: this.currentTime,
          messageType: "attachment"
        });
        console.log("image added from gallary", this.messages);
        this.loading.presentLoader("Uploading image");
        this.uploadChatImage(imagedata);
        // setTimeout(() => {
        //   this.extras.dismiss();
        //   this.scrollDown();
        // }, 5000);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  uploadChatImage(imageData) {
    console.log(this.recieverid,'id recieverid')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const random = Math.floor(Math.random() * 100);
    const options: FileUploadOptions = {
      fileKey: "attachment",
      fileName: "myChat_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: "post",
      mimeType: "image/jpeg",
      headers: {},
      params: {
        image: "YPOP",
      },
    };
    fileTransfer
      .upload(
        imageData,
        "https://admin.uniqkidzapp.com/api/upload_attachment",
        options
      )
      .then(
        async (data: any) => {
          let newProfImage = JSON.parse(data.response);
          console.log('newProfImage',newProfImage)
          let getimage=newProfImage.data
          console.log('get image only',getimage)
          console.log("Image name after uploading", getimage);
          this.sendMessage(
            this.recieverid,
            getimage,
            "attachment"
          );
          this.loading.dismiss();
          this.scrollDown();
        },
        (err) => {
          this.loading.dismiss();
          console.log("Error");
          console.log(err);
          return;
        }
      );
  }








  scrollDown() {
    this.content.scrollToBottom(50);
    
  }
}
