import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TypesService } from 'src/app/services/types.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-delete-job-type',
  templateUrl: './delete-job-type.component.html',
  styleUrls: ['./delete-job-type.component.css']
})
export class DeleteJobTypeComponent {

  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private typeService:TypesService) {
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
    this.typeService.deleteType(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            window.location.reload();
            this.openDialog();
          }
        })
  }
}


