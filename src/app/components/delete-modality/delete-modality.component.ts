import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalitiesService } from 'src/app/services/modalities.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-delete-modality',
  templateUrl: './delete-modality.component.html',
  styleUrls: ['./delete-modality.component.css']
})
export class DeleteModalityComponent {

  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private modalityService:ModalitiesService) {
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
    this.modalityService.deleteModality(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            window.location.reload();
            this.openDialog();
          }
        })
  }
}



