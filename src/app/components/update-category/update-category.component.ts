import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  updateCategory!:FormGroup;
  submitted=false;

  category:any;
  id:any;
  title:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private formBuilder:FormBuilder,private categoryService:CategoryService) {
    this.id = data.id;
    this.title=data.title;
  }

  ngOnInit():void{


    this.updateCategory = this.formBuilder.group({
     
      title: [''],

  });

}
update(){
  this.submitted = true


this.category={

      "id":this.id,
       "title":this.title

}

console.warn(this.category);

this.categoryService.updateCategories(this.id,this.category).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.matDialogRef.closeAll();
    window.location.reload();
    this.openDialog();
  }
})

}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}

}
