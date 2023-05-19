import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-job-category',
  templateUrl: './add-job-category.component.html',
  styleUrls: ['./add-job-category.component.css']
})
export class AddJobCategoryComponent {
  addCategory!:FormGroup;
  submitted=false;

  category:any;
  id:any;
  title:any;

  constructor(private categoryService:CategoryService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{


    this.addCategory = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],

  });

}
save(){
  this.submitted = true

  if(this.addCategory.invalid){
    return
  }else{
this.category={

      "id":this.id,
       "title":this.title

}

console.warn(this.category);

this.categoryService.addCategories(this.category).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.matDialogRef.closeAll();
    window.location.reload();
    this.openDialog();
  }
})
  }
}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}
}

