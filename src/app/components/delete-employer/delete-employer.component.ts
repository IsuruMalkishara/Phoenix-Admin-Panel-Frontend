import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployerService } from 'src/app/services/employer.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-delete-employer',
  templateUrl: './delete-employer.component.html',
  styleUrls: ['./delete-employer.component.css']
})
export class DeleteEmployerComponent {
  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private employerService:EmployerService) {
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
    this.employerService.deleteEmployer(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            window.location.reload();
            this.openDialog();
          }
        })
  }
}
