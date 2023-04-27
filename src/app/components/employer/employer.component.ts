import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmployerComponent } from '../delete-employer/delete-employer.component';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  allEmployerData:any;
  searchText:any;//for search company

  constructor(private employerService:EmployerService,private router:Router,private matDialogRef:MatDialog){}

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
editEmployer(id:any){
  this.router.navigateByUrl("dashboard/employer/"+id+"/edit");
}

//delete employer
deleteEmployer(id:any){
  this.openDialogBox(id);
}

openDialogBox(id:any){
  this.matDialogRef.open(DeleteEmployerComponent,{
    data:{
      id:id
    }
  });
}

//show vacancies
showVacancies(id:any){
  this.router.navigateByUrl("dashboard/employer/"+id+"/vacancy");
}

//search company
search(){
  console.warn(this.searchText);
}
}
