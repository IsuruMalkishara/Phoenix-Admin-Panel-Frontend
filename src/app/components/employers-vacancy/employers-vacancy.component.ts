import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-employers-vacancy',
  templateUrl: './employers-vacancy.component.html',
  styleUrls: ['./employers-vacancy.component.css']
})
export class EmployersVacancyComponent {

  employerId:any;
  employerName:any;
  allVacancyData:any;
  data:any;

  constructor(private vacancyService:VacancyService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder,private employerService:EmployerService){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.employerId = params['id'];
  });

  this.getVacancyDataById();
  this.getEmployerById();
}

getVacancyDataById(){

  this.vacancyService.getVacancyByEmployerId(this.employerId).subscribe((res)=>{
    console.warn(res);
  this.allVacancyData=res;
  })
}

getEmployerById(){

  this.employerService.getEmployerById(this.employerId).subscribe((res)=>{
    console.warn(res);
  this.data=res;
this.employerName=this.data.name;
  })
}

//view vacancy
viewVacancy(id:any){
  this.router.navigateByUrl("dashboard/vacancy/"+id);
}
//add vacancy
addVacancy(){
  this.router.navigateByUrl("dashboard/employer/"+this.employerId+"/add");
}
}
