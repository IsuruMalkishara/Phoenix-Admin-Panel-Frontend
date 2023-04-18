import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UnsuccessPopupComponent } from '../unsuccess-popup/unsuccess-popup.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPassword!:FormGroup;
  submitted=false;

  emailAddress:any;

  result:any;
  constructor(private formBuilder:FormBuilder,private router: Router,private matDialogRef:MatDialog,private adminService:AdminService,private route:ActivatedRoute){}

  ngOnInit(){
    this.forgotPassword = this.formBuilder.group({
      emailAddress:['',[Validators.required,Validators.email]]

    })


  }




  openErrorDialog(message:any){
    this.matDialogRef.open(UnsuccessPopupComponent,{
      data : {
        message : message
      }
    });
  }

  onSubmit(){

    this.submitted = true

    if(this.forgotPassword.invalid){
      return
    }else{

       console.warn(this.emailAddress);
     this.adminService.forgotPassword(this.emailAddress).subscribe((res)=>{
      console.warn(res);
      if(res==true){
        this.router.navigateByUrl("verify");

        }else{
          this.openErrorDialog("Please enter correct email address")
        }
     })

    }

  }
}
