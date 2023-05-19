import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  updateAdmin!:FormGroup;
  submitted=false;

  adminId:any;
  data:any;

  admin:any;

  userName:any;
  profilePicture:any;
  email:any;
  phone:any;
  userType:any;

  adminType:any;
  visible:boolean=false;

  constructor(private adminService:AdminService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.adminId = params['id'];
  });

  this.getAdminDataById();

  this.updateAdmin = this.formBuilder.group({
    userName:[''],
    profilePicture:[''],
    email:[''],
    phone:[''],
    userType:[''],

  })
this.adminType=sessionStorage.getItem('userType');
if(this.adminType.includes("Super Admin")){
  this.visible=true;
}
}

//update logo
changeProfilePicture(event:any){
  const target = event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  console.log(file);
  this.convertImageToBase64(file)
}

convertImageToBase64(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
  });

  observable.subscribe((d) => {
    console.warn(d)
    this.profilePicture = d
  })
}

readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);

  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete();
  };
  filereader.onerror = (error) => {
    subscriber.error(error);
    subscriber.complete();
  };
}


getAdminDataById(){
  this.adminService.getAdminDataById(this.adminId).subscribe((res)=>{
    this.data=res;
    console.warn(this.data);
    this.userName=this.data.userName;
    this.profilePicture=this.data.profilePicture;
    this.email=this.data.email;
    this.phone=this.data.phone;
    this.userType=this.data.userType;
  })
}



updateAdminData(){
  this.submitted = true


this.admin={
      "id":this.adminId,
      "userName":this.userName,
      "profilePicture":this.profilePicture,
       "email":this.email,
       "phone":this.phone,
       "userType":this.userType

}

console.warn(this.admin);

this.adminService.updateAdmin(this.adminId,this.admin).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    if(this.adminType.includes('Super Admin')){
      this.router.navigateByUrl("dashboard/admin");
    }else{
      this.router.navigateByUrl("dashboard/vacancy");
    }
    this.openDialog();
  }
})
}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}
}
