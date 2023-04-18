import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PopupComponent } from '../popup/popup.component';
import { UnsuccessPopupComponent } from '../unsuccess-popup/unsuccess-popup.component';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted=false;

  verificationCode:any;

  result:any;


  constructor(private formBuilder:FormBuilder,private router: Router,private matDialogRef:MatDialog,private adminService:AdminService,private route:ActivatedRoute){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      verificationCode:['',Validators.required],

    })


  }

  openDialog(message:any){
    this.matDialogRef.open(PopupComponent,{
      data : {
        message : message
      }
    });
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

    if(this.registerForm.invalid){
      return
    }else{

       console.warn(this.verificationCode);
     this.adminService.verifyUser(this.verificationCode).subscribe((res)=>{
      console.warn(res);
      if(res==true){
        this.router.navigateByUrl("reset");

        }else{
          this.openErrorDialog("Please enter correct verification code")
        }
     })

    }

  }

  resendCode(){
   this.adminService.resendCode().subscribe((res)=>{
    console.warn(res);
    if(res==true){
        this.openDialog("Resent Verification Code")
    }
   })
  }

}