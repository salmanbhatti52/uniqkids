import { Component, OnInit } from '@angular/core';
import { NavController,MenuController,AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File,FileEntry } from '@ionic-native/file/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-editcgprofile2',
  templateUrl: './editcgprofile2.page.html',
  styleUrls: ['./editcgprofile2.page.scss'],
})
export class Editcgprofile2Page implements OnInit {
  type:any;
  defaultProfile='assets/imgs/profilelogo.png';
  userid:any;
  accountTypeId:any;

  cpicUrl='';
  cname='';
  cemail='';
  cmobilenumber='';
  cprice='';
  caddress='';
  cabout='';

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
  agencycaregiverid: any;
  constructor(public navCtrl: NavController,
    private camera: Camera,
   public alertCtrl:AlertController,
   public loading:LoadingService,
   private rest: RestService,
   private imagePicker: ImagePicker,
   private transfer: FileTransfer,
   // private file:File,
   // private webview:WebView,
   ) { }

  ngOnInit() {
    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);

    this.agencycaregiverid=localStorage.getItem('agencycaregiverid')
    console.log('agencycaregiverid',this.agencycaregiverid)
    this.accountTypeId=localStorage.getItem('accountTypeId');
    console.log('accountTypeId',this.accountTypeId);
    this.caregiverdata();

    this.imagePicker.requestReadPermission();
  }

  async uploadPic(){
    let confirm = await this.alertCtrl.create({
      header: 'Choose from',
      cssClass: 'new',
      buttons: [
      {
        text: 'Camera',
        handler: () => {
          this.camera.getPicture(this.cameraOptions)
          .then(async imageData => {
            console.log('imagedata is = ' , imageData); 
            
           
              this.cpicUrl=imageData;
              this.defaultProfile = `data:image/png;base64,${imageData}`  
              console.log('defaultProfile is = ' , this.defaultProfile); 
           
            
            
           
          }, err => {
            
            
          })
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log('hellow world')
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
                this.cpicUrl=results[i];
                this.defaultProfile = `data:image/png;base64,${results[i]}` 
                
              }
              
            }


          }

          }, (err) => {
            console.log('error', err);
          });
          // this.camera.getPicture(this.galleryOptions)
          // .then(async imageData => {
          //  console.log('imagedata is = ' , imageData);
          
           
          //   this.cpicUrl=imageData;
          //   this.defaultProfile = `data:image/png;base64,${imageData}`  
          //   console.log('defaultProfile is = ' , this.defaultProfile); 
         
          
          // }, err => {
            
            
          // })
        }
      },
      ]
    })
    await confirm.present();
  }
  

  caregiverdata(){
    console.log('....................');
    this.loading.loadershow();
    this.rest.sendRequest("get_agency_caregiver_detail", {agencyCaregiverId:this.agencycaregiverid}).subscribe(
      (data:any)=>{
       console.log('get_agency_caregiver_detail::',data);
       if(data.status=='success'){
         console.log('suucesssss');
         this.loading.hideLoader();
         this.cname=data.data.name;
         this.cemail=data.data.email;
         if(data.data.profile_picture=='' || data.data.profile_picture==null){
           this.defaultProfile=this.defaultProfile
         }else{
           this.defaultProfile=data.data.profile_picture;
         }
         
         this.cprice=data.data.per_hour_rate
         this.cmobilenumber=data.data.mobile_number;
         this.caddress=data.data.street_address;
         this.cabout=data.data.about
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

  viewcaregiverprofile(){
    this.loading.loadershow();
    if(this.cname && this.cemail && this.cmobilenumber  && this.caddress && this.cabout){
      if (!this.validateEmail(this.cemail)) {
        this.emailError.status = true;
        this.emailError.message = "Invalid Email address.";
        setTimeout(() => {
          this.emailError.status = false;
          this.emailError.message = "";
        }, 3000);
        return;
      }
      let profiledata={
        agencyCaregiverId:this.agencycaregiverid,
        agencyId:this.userid,
        accountTypeId:5,
        email:this.cemail,
        name:this.cname,
        profilePicture: this.cpicUrl,
        mobileNumber: this.cmobilenumber,
        streetAddress: this.caddress,
        about: this.cabout,
        // perHourRate:this.cprice
      }
     
      this.rest.sendRequest("edit_agency_caregiver", profiledata).subscribe(
        (data:any)=>{
         console.log('edit_agency_caregiver::',data);
         if(data.status=='success'){
           
            this.loading.presentToast('Profile Update Successfully!!');
            this.loading.hideLoader();
            this.navCtrl.navigateForward('/cgviewprofile1');
           
           
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
    if (!this.cname) {
      this.nameError.status = true;
      this.nameError.message = "Field is required";
    }
    if (!this.cemail) {
      this.emailError.status = true;
      this.emailError.message = "Field is required";
    }
    if (!this.cmobilenumber) {
      this.mobilenumberError.status = true;
      this.mobilenumberError.message = "Field is required";
    }
    if (!this.caddress) {
      this.addressError.status = true;
      this.addressError.message = "Field is required";
    }
    // if (!this.cprice) {
    //   this.priceError.status = true;
    //   this.priceError.message = "Field is required";
    // }
    if (!this.cabout) {
      this.aboutError.status = true;
      this.aboutError.message = "Field is required";
    }    
    setTimeout(() => {
      this.mobilenumberError.status = false;
      this.mobilenumberError.message = "";
      this.addressError.status = false;
      this.addressError.message = "";
      // this.priceError.status = false;
      // this.priceError.message = "";

      this.aboutError.status = false;
      this.aboutError.message = "";
    }, 3000);
   
  }
  


  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  convertoBase64DataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();

  }

  randomnumberGenerator(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


}
