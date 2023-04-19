import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PopupComponent } from '../popup/popup.component';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm!:FormGroup
  submitted=false

  name:String="";
  email:String="";
  phoneNumber:String="";
  password:String="";
  confirmPassword:String="";
  profilePicture!:Observable<any>;

  isPasswordTrue:boolean=true;
  isEmailTrue:boolean=true;

  result:any;
  constructor(private adminService:AdminService,private formBuilder:FormBuilder,private router: Router,private matDialogRef:MatDialog){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      phoneNumber:['',[Validators.required,Validators.minLength(11),Validators.minLength(11)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],
      profilePicture:['',Validators.required]
    })
  }

  onSelectFile(event:any){
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
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


  openDialog(){
    this.matDialogRef.open(PopupComponent,{
      data : {
        message : 'Registration Successfull'
      }
    });
  }
  onSubmit(){

    this.submitted = true
    console.warn(this.profilePicture);
    if(this.registerForm.invalid){
      return
    }else{
      let userData={
              "name":this.name,
              "email":this.email,
              "phone":this.phoneNumber,
              "password":this.password,
              "confirmPassword":this.confirmPassword,
              "profilePicture":this.profilePicture

            };

      console.warn(userData);

       this.isPasswordTrue=true;
      this.isEmailTrue=true;
      this.adminService.signup(userData).subscribe((res:any)=>{
        this.result=res;
        console.warn(this.result);
        if(this.result=="1"){
          this.router.navigateByUrl("verification");

        }else if(this.result=="2"){
          this.isEmailTrue=false;
          this.result=="";
        }else if(this.result=="3"){
          this.isPasswordTrue=false;
          this.result=="";
        }


      }
      )


    }

  }
}
