import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  allVacancyData:any;
 searchText:any;

  constructor(private vacancyService:VacancyService,private router:Router){}

  ngOnInit(){

    this.getAllVacancy();

  }
//all vacancies data
  getAllVacancy(){
this.vacancyService.getAllVacancy().subscribe((res)=>{
  console.warn(res);
this.allVacancyData=res;
})
  }

//view vacancy
viewVacancy(id:any){
  this.router.navigateByUrl("dashboard/vacancy/"+id);
}

//search vacancy
search(text:any){
console.warn(text);
if(text==undefined || text.length==0){
  this.getAllVacancy();
}else{
  this.vacancyService.searchVacancy(text).subscribe((res)=>{
    console.warn(res);
    this.allVacancyData=res;
  })
}
}



}
