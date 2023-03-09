import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { RestService } from "../services/rest.service";
import { ChildService } from "../services/child.service";
import { LoadingService } from "../services/loading.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-childprofile',
  templateUrl: './childprofile.page.html',
  styleUrls: ['./childprofile.page.scss'],
})
export class ChildprofilePage implements OnInit {
  childid:any;
  parentid:any;
  defaultProfile:any;
  childname:any
  diagnosis:any;
  age:any;
  allergies:any;
  pediatrician:any;
  insuranceinfo:any;
  instruction:any;
  notes:any;

  childdetails:any;

  allergyarr=[];
  medicationsarr=[];
  foodarr=[];
  snackarr=[];
  likesarr=[];
  dislikesarr=[];
  favouritearr=[];
  contactsarr=[];
  constructor(public navCtrl: NavController,
    public loading:LoadingService,
    public childService: ChildService,
    private route: ActivatedRoute,
    private rest: RestService) { 

    this.childid = this.route.snapshot.paramMap.get('childid');
    console.log('child id',this.childid);
    this.parentid = this.route.snapshot.paramMap.get('parentid');
    console.log('parentid id',this.parentid)

    // this.childid=this.childService.childid
    // this.parentid=this.childService.parentid
    this.getdetails();
  }

  ngOnInit() {
  }

  goback(){
  	this.navCtrl.navigateBack('/child');
  }

  getdetails(){
    let senddata={
      userId: this.parentid,
      childId: this.childid
    }
    this.loading.loadershow();
     this.rest.sendRequest("get_child_details",senddata).subscribe(
      (data:any)=>{
       console.log('get_child_details data::',data);
       this.childdetails=data.data
       this.loading.hideLoader();
       if(data.data.profile_picture==null){
         this.defaultProfile='assets/imgs/profilelogo.png'
       }else{
          this.defaultProfile=data.data.profile_picture
       }
       this.childname=data.data.child_name
       this.age=data.data.age
       this.diagnosis=data.data.diagnosis
       this.pediatrician=data.data.pediatrician
       this.instruction=data.data.special_instructions
       this.insuranceinfo=data.data.insurance_info
       this.notes=data.data.additional_notes
       data.data.allergies.forEach(val=>{
         let data={
           allergy:val.allergy
         }
         this.allergyarr.push(data)
       })
       console.log('allergyarr',this.allergyarr);

       data.data.medications.forEach(val=>{
         let data={
           medicationname:val.medication_name,
           medicationtime:val.medication_time
         }
         this.medicationsarr.push(data)
       })
       console.log('medications',this.medicationsarr);
       
       data.data.eating_schedule.forEach(val=>{
         let data={
           eatingtime:val.eating_time,
           foodname:val.food_name
         }
         this.foodarr.push(data)
       })
       console.log('foodarr',this.foodarr);

       data.data.snacks_schedule.forEach(val=>{
         let data={
           snackname:val.snack_name,
           snacktime:val.snack_time
         }
         this.snackarr.push(data)
       })
       console.log('snackarr',this.snackarr);

       data.data.likes.forEach(val=>{
         let data={
           likes:val.like
         }
         this.likesarr.push(data)
       })
       console.log('likesarr',this.likesarr);

        data.data.dislikes.forEach(val=>{
         let data={
           dislikes:val.dislike
         }
         this.dislikesarr.push(data)
       })
       console.log('dislikesarr',this.dislikesarr);

       data.data.favourite_activities.forEach(val=>{
         let data={
           favourite:val.favourite_activity
         }
         this.favouritearr.push(data)
       })
       console.log('favouritearr',this.favouritearr);

       data.data.emergency_contacts.forEach(val=>{
         let data={
           contact:val.emergency_contact
         }
         this.contactsarr.push(data)
       })
       console.log('contactsarr',this.contactsarr);

      }
    );
  }


  edit(){
    // this.loading.presentToast('In Proccess');
    this.navCtrl.navigateForward(['editchild',{
      childid:this.childid,
      parentid:this.parentid
    }])

    this.childService.childdata=JSON.stringify(this.childdetails)
    this.childService.childid=this.childid
    console.log('childServiceid',this.childService.childid)
    this.childService.parentid=this.parentid;
    console.log('childServiceparentid',this.childService.parentid)
  }
 
}
