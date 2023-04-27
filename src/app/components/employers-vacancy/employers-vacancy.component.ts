import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-employers-vacancy',
  templateUrl: './employers-vacancy.component.html',
  styleUrls: ['./employers-vacancy.component.css']
})
export class EmployersVacancyComponent {

  employerId:any;
  allVacancyData:any;

  constructor(private vacancyService:VacancyService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.employerId = params['id'];
  });

  this.getVacancyDataById();
}

getVacancyDataById(){

  this.vacancyService.getVacancyByEmployerId(this.employerId).subscribe((res)=>{
    console.warn(res);
  this.allVacancyData=res;
  })
}

//view vacancy
viewVacancy(id:any){
  this.router.navigateByUrl("dashboard/vacancy/"+id);
}

}
