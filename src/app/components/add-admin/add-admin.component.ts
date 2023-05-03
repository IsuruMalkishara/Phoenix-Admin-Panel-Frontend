import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  addAdmin!:FormGroup;
  submitted=false;


  admin:any;

  userName:any;
  profilePicture:any;
  email:any;
  phone:any;
  password:any;
  userType:any;




  constructor(private adminService:AdminService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{


    this.addAdmin = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['', Validators.required],
  });

}




addNewAdmin(){
  this.submitted = true

  if(this.addAdmin.invalid){
    return
  }else{
this.admin={

      "userName":this.userName,
       "email":this.email,
       "phone":this.phone,
       "password":this.password,
       "userType":this.userType

}

console.warn(this.admin);

this.adminService.addAdmin(this.admin).subscribe((res)=>{
  console.warn(res);

  if(res==true){
      this.router.navigateByUrl("dashboard/admin");
    this.openDialog();
  }
})
  }
}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}
}
