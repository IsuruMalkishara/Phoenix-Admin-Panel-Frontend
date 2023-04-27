import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { PopupComponent } from '../popup/popup.component';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']
})
export class EditEmployerComponent {
  updateEmployer!:FormGroup;
  submitted=false;

  employerId:any;
  data:any;

  name:any;
  address:any;
  logo:any;
  email:any;
  phone:any;
  verification:any;

  employer:any;
  constructor(private employerService:EmployerService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.employerId = params['id'];
  });

  this.getEmployerDataById();

  this.updateEmployer = this.formBuilder.group({
    name:[''],
    address:[''],
    logo:[''],
    email:[''],
    phone:[''],
    verification:[''],

  })

}

//update logo
changeLogo(event:any){
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
    this.logo = d
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

changeVerification(){
  this.verification=!this.verification;
}
getEmployerDataById(){
  this.employerService.getEmployerById(this.employerId).subscribe((res)=>{
    this.data=res;
    console.warn(this.data);
    this.name=this.data.name;
    this.logo=this.data.logo;
    this.address=this.data.address;
    this.email=this.data.email;
    this.phone=this.data.phone;
    this.verification=this.data.verification;
  })
}



updateEmployerData(){
  this.submitted = true


this.employer={
      "id":this.employerId,
      "name":this.name,
      "address":this.address,
       "email":this.email,
       "phone":this.phone,
       "logo":this.logo,
       "verification":this.verification

}

console.warn(this.employer);

this.employerService.updateEmployer(this.employerId,this.employer).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.router.navigateByUrl("dashboard/employer");
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
