import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  allEmployerData:any;

  constructor(private employerService:EmployerService,private router:Router){}

  ngOnInit(){

    this.getAllEmployer();

  }
//all employer data
  getAllEmployer(){
this.employerService.getAllEmployers().subscribe((res)=>{
  console.warn(res);
this.allEmployerData=res;
})
  }

//view employer
viewEmployer(id:any){
  this.router.navigateByUrl("dashboard/employer/"+id);
}

}
