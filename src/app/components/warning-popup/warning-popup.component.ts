import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.css']
})
export class WarningPopupComponent {
  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private vacanncyService:VacancyService,private router:Router) {
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
    this.vacanncyService.deleteVacancy(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            this.router.navigateByUrl("dashboard");
            this.openDialog();
          }
        })
  }
}
