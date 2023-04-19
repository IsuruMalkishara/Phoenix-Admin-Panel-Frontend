import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  submitted=false;

  isInvalid=false;//validate user

  email:String="";
  password:String="";

  result:any;

  isLoggedin:Boolean=false;
  loggedinUserType:String="";
  loggedinUserId:any;


  constructor( private formBuilder:FormBuilder,private router: Router,private adminService:AdminService){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }



  onSubmit(){

    this.submitted = true

    if(this.loginForm.invalid){
      return
    }else{
      let loginData={

        "email":this.email,
        "password":this.password

      };
       console.warn(loginData);
       this.adminService.Login(loginData).subscribe((res:any)=>{
        this.result=res;

        console.warn(this.result);
        sessionStorage.setItem("token",JSON.stringify(this.result.access_token));
        sessionStorage.setItem("userId",JSON.stringify(this.result.id));
        this.router.navigateByUrl("dashboard");

      },(error)=>{
        console.warn(error);
        this.isInvalid=true;
      }
      )


    }

  }
}
