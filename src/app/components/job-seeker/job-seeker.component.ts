import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent {
  allJobSeekerData:any;


  constructor(private jobSeekerService:JobseekerService,private router:Router,private matDialogRef:MatDialog){}

  ngOnInit(){

    this.getAllJobSeekers();

  }
//all job seeker data
  getAllJobSeekers(){
this.jobSeekerService.getAllJobSeekers().subscribe((res)=>{
  console.warn(res);
this.allJobSeekerData=res;
})
  }

//view jobseeker
viewData(id:any){
  this.router.navigateByUrl("dashboard/jobseeker/"+id);
}





}
