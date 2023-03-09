import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { ChildService } from "../services/child.service";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RestService } from "../services/rest.service";
import { LoadingService } from "../services/loading.service";
import { ActivatedRoute, Router} from '@angular/router';
import { EditchildService } from "../services/editchild.service";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-editchild',
  templateUrl: './editchild.page.html',
  styleUrls: ['./editchild.page.scss'],
})
export class EditchildPage implements OnInit { 
	numberarray=[];
  array=[];
  defaultProfile='';
  userid:any;
  picUrl='';

  childid:any;
  parentid:any;
  age=0;
  contacts='';
  phoneno:any;  
  childname='';
  diagnosis='';
  allergies='';
  pediatrician='';
  insuranceinfo='';
  instructions='';
  notes='';

  allergiesarr=[];
  medicationname=[];
  foodname=[];
  snackname=[]
  nooflikes=[]
  noofdislkikes=[]
  nooffavorite=[];

  medicationsarr=[];
  foodarr=[];
  snackarr=[];
  likesarr=[];
  dislikesarr=[];
  favouritearr=[];
  contactsarr=[];

  childnameError = {
    status: false,
    message: "",
  };
  diagnosisError = {
    status: false,
    message: "",
  };
  allergiesError = {
    status: false,
    message: "",
  };
  contactsError = {
    status: false,
    message: "",
  };
  pediatricianError = {
    status: false,
    message: "",
  };
  insuranceinfoError = {
    status: false,
    message: "",
  };
  instructionsError = {
    status: false,
    message: "",
  };
  notesError = {
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

  allergyarr=[]
  childdetail:any;
  med:any;

  array1=[];
  emergencycontacts=[];

  error = {
    status: false,
    message: "",
  };

  childdata:any;
  food: any[];
  snackvalue: any[];
  likeval: any[];
  dislikeval: any[];
  fav: any[];
  constructor(public navCtrl: NavController,
    public childService: ChildService,
    public editchildService: EditchildService,
    private camera: Camera,
    private imagePicker: ImagePicker,
    public alertCtrl:AlertController,
    public loading:LoadingService,
    private rest: RestService,
    private route: ActivatedRoute) { 

    this.userid=localStorage.getItem('uid');
    console.log('userid',this.userid);

    console.log('allergies',this.allergies)
    this.childid = this.childService.childid
    console.log('child id',this.childid);
    this.parentid = this.childService.parentid
    console.log('parentid id',this.parentid)

     this.childdata=JSON.parse( this.childService.childdata)

    this.getdetails(this.childdata);
    
  }

  ngOnInit() {
    this.imagePicker.requestReadPermission();
  }

  ionViewDidEnter(){
    this.medicationname=this.editchildService.medication
    console.log('medication',this.medicationname);
    this.foodname=this.editchildService.food
    console.log('food',this.foodname);
    this.snackname=this.editchildService.snack
    console.log('snack',this.snackname);
    this.nooflikes=this.editchildService.likes
    console.log('likes',this.nooflikes);
    this.noofdislkikes=this.editchildService.dislikes
    console.log('dislikes',this.noofdislkikes);
    this.nooffavorite=this.editchildService.favorite
    console.log('favorite',this.nooffavorite);

    
  }

  goback(){
  	this.navCtrl.navigateBack('/child');
  }
  

  setValue($event: Event): void {
    this.age = parseInt(($event.target as HTMLInputElement).value, 10);
    console.log('current value',this.age)
  }

  add(){
    if(this.contacts){
      // let data={
      //   phoneno:this.contacts
      // }
      // this.array.push(data);
      this.emergencycontacts.push(this.contacts);
      console.log('t',this.emergencycontacts)
      this.contacts='';
    }
    if(!this.contacts){
      console.log('nullllllllll')
    }

  }

   async uploadPic(){
    let confirm = await this.alertCtrl.create({
      header: 'Choose from',
      cssClass: 'profileAlertBox',
      buttons: [
      {
        text: 'Camera',
        handler: () => {
          this.camera.getPicture(this.cameraOptions)
          .then(async imageData => {
            console.log('imagedata is = ' , imageData); 
            this.picUrl=imageData;
             this.defaultProfile = `data:image/png;base64,${imageData}`  
            console.log('defaultProfile is = ' , this.defaultProfile); 
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
          //  console.log('imagedata is = ' , imageData);
          //  this.picUrl=imageData;
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


   getdetails(data){
    
     console.log('childetails:',data);
      // this.loading.loadershow();
     this.array=[];
     this.array1=[];
     this.med=[];
     this.food=[];
     this.snackvalue=[];
     this.likeval=[];
     this.dislikeval=[];
     this.fav=[]
    let senddata={
      userId: this.parentid,
      childId: this.childid
    }
     // this.rest.sendRequest("get_child_details",senddata).subscribe(
     //  (data:any)=>{
     //   console.log('get_child_details data::',data);
       // this.loading.hideLoader();
       if(data.profile_picture==null){
         this.defaultProfile='assets/imgs/profilelogo.png'
       }else{
          this.defaultProfile=data.profile_picture
       }
       this.childname=data.child_name
       this.age=data.age
       this.diagnosis=data.diagnosis
       this.pediatrician=data.pediatrician
       this.instructions=data.special_instructions
       this.insuranceinfo=data.insurance_info
       this.notes=data.additional_notes

       console.log('childname',this.childname)
       console.log('diagnosis',this.diagnosis)
       console.log('age',this.age)
       console.log('pediatrician',this.pediatrician)
       console.log('instructions',this.instructions)
       console.log('insuranceinfo',this.insuranceinfo)
       console.log('notes',this.notes)
       data.allergies.forEach(val=>{
         console.log('allergies array',val)
         let data={
           allergy:val.allergy
         }

         this.array1.push(val.allergy)
         
         this.allergies=this.array1.toString();
         console.log('allergies:',this.array1)
       })
        console.log('data.medications===== from previous page',data.medications);
        ///////////medication/////////////
        data.medications.forEach(val=>{
         let data={
          medication_name:val.medication_name,
          medication_time:val.medication_time
         }
         this.medicationsarr.push(data)
         this.med=this.medicationsarr
         
       }) 
       this.editchildService.medication =  this.med;
        console.log('medications---first time applying to serviceee', this.editchildService.medication);
       //////////////medication end///////////////

       ////////// eating ///////////////////////
        data.eating_schedule.forEach(val=>{
          let data={
            food_name:val.food_name,
           eating_time:val.eating_time
          }
          this.foodarr.push(data)
          this.food=this.foodarr
          
        }) 

        this.editchildService.food =  this.food;
        console.log('Food---first time applying to serviceee',this.editchildService.food);
        ///////////eating end /////////////////////////

        /////////////snack ///////////////////////
        data.snacks_schedule.forEach(val=>{
          let data={
            snack_name:val.snack_name,
            snack_time:val.snack_time
          }
          this.snackarr.push(data)
          this.snackvalue=this.snackarr
          
        }) 
        this.editchildService.snack =  this.snackvalue;
        console.log('snack---first time applying to serviceee',this.editchildService.snack);
        /////////////snack end///////////////////////////

        /////////////likes/////////////////////
        data.likes.forEach(val=>{
          this.likesarr.push(val.like)
          this.likeval=this.likesarr
          
        }) 
        this.editchildService.likes =   this.likeval;
        console.log('likes---first time applying to serviceee',this.editchildService.likes);
         /////////////likes end /////////////////////

         /////////dislike/////////////////////
         data.dislikes.forEach(val=>{
          this.dislikesarr.push(val.dislike)
          this.dislikeval= this.dislikesarr
          
        }) 
        this.editchildService.dislikes =  this.dislikeval
        console.log('dislikes---first time applying to serviceee',this.editchildService.dislikes);

        /////////dislike end /////////////////////

        ///////// favourite/////////////////////
        data.favourite_activities.forEach(val=>{
          this.favouritearr.push(val.favourite_activity)
          this.fav= this.favouritearr
          
        }) 
        this.editchildService.favorite =  this.fav;
        console.log('favorite---first time applying to serviceee',this.editchildService.favorite);
        ///////// favourite end/////////////////////

       data.emergency_contacts.forEach(val=>{
        //  let data={
        //    phoneno:val.emergency_contact
        //  }
        //  this.numberarray.push(data)
         this.emergencycontacts.push(val.emergency_contact)
       })
       console.log('contactsarr',this.emergencycontacts);

    //   }
    // );
  }


  medication(){   
    this.navCtrl.navigateForward('/editmedication');
    
  }
  eating(){
    this.navCtrl.navigateForward('/editeating');
     // this.editchildService.editpage='edit';
  }
  snack(){
    this.navCtrl.navigateForward('/editsnack');
     // this.editchildService.editpage='edit';
  }
  likes(){
    this.navCtrl.navigateForward('/editlikes');
     // this.editchildService.editpage='edit';
  }
  dislikes(){
    this.navCtrl.navigateForward('/editdislikes');
     // this.editchildService.editpage='edit';
  }
   favorite(){
    this.navCtrl.navigateForward('/editfavorite');
    // this.editchildService.editpage='edit';
  }


  gotoprofile(){
    if(this.allergies==''){
      this.allergiesarr
    }else{
     this.allergies
     this.allergiesarr= this.allergies.split(",")
     console.log('allergies',this.allergiesarr)
    }
    console.log('childname',this.childname);
     
    if(this.childname && this.diagnosis && this.allergies.length>0 &&  this.pediatrician &&
     this.insuranceinfo && this.instructions && this.notes){

      let fields={
        childId: this.childid,
        parentId:this.userid,
        profilePicture:this.picUrl,
        childName:this.childname,
        age:this.age,
        diagnosis:this.diagnosis,
        allergies:this.allergiesarr,
        medications:this.medicationname,
        eatingSchedule:this.foodname,
        snacksSchedule:this.snackname,
        likes:this.nooflikes,
        dislikes:this.noofdislkikes,
        favouriteActivities:this.nooffavorite,
        emergencyContacts:this.emergencycontacts,
        pediatrician:this.pediatrician,
        insuranceInfo:this.insuranceinfo,
        specialInstructions:this.instructions,
        additionalNotes:this.notes
      }
      console.log('json stringfy',JSON.stringify(fields))
      this.loading.loadershow();
      this.rest.sendRequest("edit_child", fields).subscribe(
        (data:any)=>{
          console.log('edit child data::',data);
          if(data.status=='success'){
            console.log('edit child data::',data);
            this.loading.hideLoader();
            this.navCtrl.navigateForward('/child');
            this.editchildService.medication=[];
            this.editchildService.food=[];
            this.editchildService.snack=[];
            this.editchildService.likes=[];
            this.editchildService.dislikes=[];
            this.editchildService.favorite=[];
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
    if(!this.childname){
      this.childnameError.status = true;
      this.childnameError.message = "Field is required";
    }
    if(!this.diagnosis){
      this.diagnosisError.status = true;
      this.diagnosisError.message = "Field is required";
    }
    if(this.allergies.length==0){
      this.allergiesError.status = true;
      this.allergiesError.message = "Field is required";
    }
    // if(this.emergencycontacts.length==0){
    //   this.contactsError.status = true;
    //   this.contactsError.message = "Field is required";
    // }
    if(!this.pediatrician){
      this.pediatricianError.status = true;
      this.pediatricianError.message = "Field is required";
    }
    if(!this.insuranceinfo){
      this.insuranceinfoError.status = true;
      this.insuranceinfoError.message = "Field is required";
    }
    if(!this.instructions){
      this.instructionsError.status = true;
      this.instructionsError.message = "Field is required";
    }
    if(!this.notes){
      this.notesError.status = true;
      this.notesError.message = "Field is required";
    }
    setTimeout(() => {
      this.childnameError.status = false;
      this.childnameError.message = "";
      this.diagnosisError.status = false;
      this.diagnosisError.message = "";
      this.allergiesError.status = false;
      this.allergiesError.message = "";
      // this.contactsError.status = false;
      // this.contactsError.message = "";
      this.pediatricianError.status = false;
      this.pediatricianError.message = "";
      this.insuranceinfoError.status = false;
      this.insuranceinfoError.message = "";
      this.instructionsError.status = false;
      this.instructionsError.message = "";
      this.notesError.status = false;
      this.notesError.message = "";
    }, 3000);
   
  }
}
