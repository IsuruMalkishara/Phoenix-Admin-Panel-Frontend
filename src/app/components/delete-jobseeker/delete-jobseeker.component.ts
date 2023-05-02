import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-jobseeker',
  templateUrl: './delete-jobseeker.component.html',
  styleUrls: ['./delete-jobseeker.component.css']
})
export class DeleteJobseekerComponent {
  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private jobseekerService:JobseekerService,private router:Router) {
    this.id = data.id
  }

  ngOnInit(): void {
  }

  openDialog(){
    this.matDialogRef.open(PopupComponent,{
      data : {
        message : 'Deleted'
      }
    });
  }

  delete(id:any){
    this.jobseekerService.deleteJobSeeker(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            this.router.navigateByUrl("dashboard/jobseeker");
            this.openDialog();
          }
        })
  }
}
