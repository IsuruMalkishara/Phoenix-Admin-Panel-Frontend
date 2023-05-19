import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent {
  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private adminSeervice:AdminService) {
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
    this.adminSeervice.deleteAdmin(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            window.location.reload();
            this.openDialog();
          }
        })
  }
}
