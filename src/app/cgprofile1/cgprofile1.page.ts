import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController,MenuController,AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-cgprofile1',
  templateUrl: './cgprofile1.page.html',
  styleUrls: ['./cgprofile1.page.scss'],
})
export class Cgprofile1Page implements OnInit {
	@ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
	profiletype:any;
  type:any;
  defaultProfile='assets/imgs/profilelogo.png';
  userid:any;
  accountTypeId:any;

  picUrl:any;
  fname:any;
  lname:any;
  email:any;
  mobilenumber='';
  price='';
  address='';
  about='';
  bankname='';
  accountnumber='';

  
  nameError = {
    status: false,
    message: "",
  };
  
  mobilenumberError = {
    status: false,
    message: "",
  };
  emailError = {
    status: false,
    message: "",
  };
  relationError = {
    status: false,
    message: "",
  };
  addressError = {
    status: false,
    message: "",
  };
  aboutError = {
    status: false,
    message: "",
  };
  priceError = {
    status: false,
    message: "",
  };
  banknameError = {
    status: false,
    message: "",
  };
  accountnumberError = {
    status: false,
    message: "",
  };

  error = {
    status: false,
    message: "",
  };

  cameraOptions: CameraOptions = {
    quality: 50,
    allowEdit:false,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.DATA_URL,  
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,      
    quality: 50,
    allowEdit:false,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,      
    correctOrientation: true
  }
  cdefaultProfile: string;
  constructor(public navCtrl: NavController,
     private camera: Camera,
    public alertCtrl:AlertController,
    private imagePicker:ImagePicker,
    public loading:LoadingService,
    private rest: RestService) { }

  ngOnInit() {
    this.imagePicker.requestReadPermission();
  }

  ionViewDidEnter(){
    
  }

  ionViewWillEnter() {
    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);

    this.accountTypeId=localStorage.getItem('accountTypeId');
    console.log('accountTypeId',this.accountTypeId);
    this.getprofiledata(this.userid);
    
  //   if (this.profiletype) {
  //     if (this.profiletype === 'agency') {
  //       this.mySegment.nativeElement.children[0].click();
  //       console.log('click event',this.mySegment.nativeElement.children[0].click())
      
  //     }
  //     if (this.profiletype === 'caregiver') {
  //       this.mySegment.nativeElement.children[1].click();
  //     }
  //   } else {
  //     this.profiletype = 'agency';
  //     this.mySegment.nativeElement.children[0].click();
  //     console.log('user id in ion view will:',this.userid)
  //   }
  }
  

  // segmentChanged(ev) {
  // 	console.log('profiletype value',ev.detail.value);
  // 	let data=ev.detail.value;
  // 	this.profiletype=data
  //   if (ev.detail.value === 'agency') {
  //     this.profiletype = 'agency';
  //     this.getprofiledata(this.userid)
  //   }
  //   if (ev.detail.value === 'caregiver') {
  //     this.profiletype = 'caregiver';
  //     this.caregiverdata(this.userid);
  //   }
  //   localStorage.setItem('profiletype', this.profiletype);
  // }

  getprofiledata(userid){
    this.loading.loadershow();
    this.rest.sendRequest("get_profile_details", {userId:userid}).subscribe(
      (data:any)=>{
       console.log('get_profile_details data::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.loading.hideLoader();
         this.fname=data.data.first_name;
         this.lname=data.data.last_name;
         this.email=data.data.email;
         if(data.data.profile_picture=='' || data.data.profile_picture==null){
           this.defaultProfile=this.defaultProfile
         }else{
           this.defaultProfile=data.data.profile_picture;
         }
         
         this.price=data.data.per_hour_rate
         this.mobilenumber=data.data.mobile_number;
         this.address=data.data.street_address;
         this.about=data.data.about
         this.bankname=data.data.bank_name;
         this.accountnumber=data.data.account_number
        }
        if(data.status=='error'){
          this.loading.hideLoader();
          console.log('signup request data:',data.status);
            this.error.status = true;
          this.error.message = data.message;
          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 3000);
          return;
        }
       
      },(err)=>{
        
      }
    );
  }

  

   async uploadPic(type){
    let confirm = await this.alertCtrl.create({
      header: 'Choose from',
      cssClass: 'profileAlertBox',
      buttons: [
      {
        text: 'Camera',
        handler: () => {
          this.camera.getPicture(this.cameraOptions)
          .then(async imageData => {
            // console.log('imagedata is = ' , imageData); 
            
           
              this.picUrl=imageData;
              this.defaultProfile = `data:image/png;base64,${imageData}`  
              // console.log('defaultProfile is = ' , this.defaultProfile); 
           
            
            
           
          }, err => {
            
            
          })
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          let options: ImagePickerOptions = {
            maximumImagesCount: 1,
            outputType: 1
          }

          this.imagePicker.getPictures(options).then((results) => {


            console.log('all selected', results);

            if( results!=null ){


            for (var i = 0; i < results.length; i++) {

              console.log('each one'+ results[i]);

             

             

              if( results[i]!="" ){
                console.log('data:image/jpeg;base64,', results[i]);
                this.picUrl=results[i];
                this.defaultProfile = `data:image/png;base64,${results[i]}` 
                
              }
              
            }


          }

          }, (err) => {
            console.log('error', err);
          });
          // this.camera.getPicture(this.galleryOptions)
          // .then(async imageData => {
                  
          //   this.picUrl=imageData;
          //   this.defaultProfile = `data:image/png;base64,${imageData}`   
          
          // }, err => {
            
            
          // })
        }
      },
      ]
    })
    await confirm.present();
  }
  
  viewprofile(){
    if(this.mobilenumber && this.bankname && this.address && this.about){
      let profiledata={
        userId:this.userid,
        accountTypeId:this.accountTypeId,
        profilePicture: this.picUrl,
        mobileNumber: this.mobilenumber,
        streetAddress: this.address,
        about: this.about,
        bankName:this.bankname,
        accountNumber:this.accountnumber,
        perHourRate:this.price
      }
      this.loading.loadershow();
      this.rest.sendRequest("update_profile", profiledata).subscribe(
        (data:any)=>{
          console.log('profiledatae data::',profiledata);
         console.log('update_profile data::',data);
         if(data.status=='success'){
           // if(this.accountTypeId==2){
           //   this.loading.presentToast('Profile Update Successfully!!');
           //   this.loading.hideLoader();
           //    this.navCtrl.navigateForward('/cgviewprofile');
           // }
           // if(this.accountTypeId==3){
             this.loading.presentToast('Profile Update Successfully!!');
             this.loading.hideLoader();
             this.navCtrl.navigateForward('/cgviewprofile1');
           // }
           
          }
          if(data.status=='error'){
            this.loading.hideLoader();
            console.log('signup request data:',data.status);
              this.error.status = true;
            this.error.message = data.message;
            setTimeout(() => {
              this.error.status = false;
              this.error.message = "";
            }, 3000);
            return;
          }
         
        },(err)=>{
          
        }
      );
    }
    if (!this.mobilenumber) {
      this.mobilenumberError.status = true;
      this.mobilenumberError.message = "Field is required";
    }
    if (!this.address) {
      this.addressError.status = true;
      this.addressError.message = "Field is required";
    }
    if (!this.price) {
      this.priceError.status = true;
      this.priceError.message = "Field is required";
    }
    if (!this.about) {
      this.aboutError.status = true;
      this.aboutError.message = "Field is required";
    }
    if (!this.bankname) {
      this.banknameError.status = true;
      this.banknameError.message = "Field is required";
    }
    if (!this.accountnumber) {
      this.accountnumberError.status = true;
      this.accountnumberError.message = "Field is required";
    }
    
    setTimeout(() => {
      this.mobilenumberError.status = false;
      this.mobilenumberError.message = "";
      this.addressError.status = false;
      this.addressError.message = "";
      this.priceError.status = false;
      this.priceError.message = "";

      this.aboutError.status = false;
      this.aboutError.message = "";
      this.banknameError.status = false;
      this.banknameError.message = "";
      this.accountnumberError.status = false;
      this.accountnumberError.message = "";
    }, 3000);
   
  }

}
