import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { DeleteJobseekerComponent } from '../delete-jobseeker/delete-jobseeker.component';

@Component({
  selector: 'app-view-jobseeker',
  templateUrl: './view-jobseeker.component.html',
  styleUrls: ['./view-jobseeker.component.css']
})
export class ViewJobseekerComponent {

  jobSeekerId:any;
  jobseekerData:any;
  certificates:any;
  profilePicture:any;
  showCarousel=true;

  constructor(private matDialogRef:MatDialog,private jobseekerService:JobseekerService,private route: ActivatedRoute,private router: Router){

  }
  ngOnInit():void{
    this.route.params.subscribe(params => {
      this.jobSeekerId = params['id'];
    });
    this.getJobseekerDataById(this.jobSeekerId)

  }

  getJobseekerDataById(id:any){

    this.jobseekerService.getJobSeekerById(id).subscribe((data)=>{
this.jobseekerData=data;
console.warn(this.jobseekerData)
this.certificates=this.jobseekerData.certificate;
if(this.certificates.length!=0){
  this.showCarousel=true;
}else{
  this.showCarousel=false;
}
if(this.jobseekerData.profilePicture!=null){
  this.profilePicture=this.jobseekerData.profilePicture;
 }else{
  this.profilePicture="../assets/default_p_p.jfif";
 }
    })

  }

  //for show certificates
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? (this.certificates.length - 1) : (this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.certificates.length - 1) ? 0 : (this.currentSlide + 1);
  }


  deleteJobseeker(id:any){
   this.openDialogBox(id);
  }

  openDialogBox(id:any){
    this.matDialogRef.open(DeleteJobseekerComponent,{
      data:{
        id:id
      }
    });
  }
}
