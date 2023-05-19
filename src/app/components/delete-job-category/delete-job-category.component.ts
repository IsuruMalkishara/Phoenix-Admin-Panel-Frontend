import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-delete-job-category',
  templateUrl: './delete-job-category.component.html',
  styleUrls: ['./delete-job-category.component.css']
})
export class DeleteJobCategoryComponent {

  id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private categoryService:CategoryService) {
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
    this.categoryService.deleteCategories(id).subscribe((res)=>{
          console.warn(res);

          if(res==true){
            this.matDialogRef.closeAll();
            window.location.reload();
            this.openDialog();
          }
        })
  }
}

